const app = require('./app');
const socketServer = require('./socket');
const { loginSPTrans } = require('./services/sptrans');

loginSPTrans();

socketServer.listen(4001, () => console.log(`Listening on port ${4001}`));
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));