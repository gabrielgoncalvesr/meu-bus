const app = require('./app');
const socketServer = require('./socket');
const { loginSPTrans } = require('./services/sptrans');

loginSPTrans();

socketServer.listen(process.env.API_SOCKET_PORT, () => console.log(`Listening on port ${process.env.API_SOCKET_PORT}`));
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));