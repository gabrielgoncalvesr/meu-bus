const app = require('./app');
const http = require("http");
const fetch = require("node-fetch");
const socketIO = require("socket.io");

const server = http.createServer(app);
const io = socketIO(server);

let interval;

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
        console.log("client disconnected");
    });

    if (interval) {
        clearInterval(interval);
    }

    socket.on("/position", ({ code }) => {
        interval = setInterval(() => {
            emitBusPositionMessage(socket, code)
        }, 2000);
    });
});

const emitBusPositionMessage = async (socket, code) => {
    const results = await fetch(`http://${process.env.SERVER_HOST}:${process.env.PORT}/sptrans/search/position?code=${code}`)
        .then(res => res.json())
        .then(json => {
            return json;
        });

    socket.emit("/position", results);
};

module.exports = server;