const app = require('./app');
const http = require("http");
const fetch = require("node-fetch");

const socketIO = require("socket.io");

const server = http.createServer(app);
const io = socketIO(server);

let interval;


io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }

    socket.on("/position", ({ code }) => {
        console.log("code:" + code);
        interval = setInterval(() => emitBusPositionMessage(socket, code), 1000);
    });

    socket.on("disconnect", () => {
        console.log("client disconnected");
    });
});


const emitBusPositionMessage = (socket, code) => {
    fetch(`http://${process.env.SERVER_HOST}:${process.env.PORT}/sptrans/search/position?code=${code}`)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad request response from server");
            }
            console.log("AQ", response.body)

        }).then(function (body) {
           //console.log(body)
           console.log("AQ2", body)
        });

    //console.log("ENTROU")

    socket.emit("/position", "teste");
};



module.exports = server;