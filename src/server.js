const app = require('./app');
const { loginSPTrans } = require('./services/sptrans');

loginSPTrans();

app.listen(process.env.PORT);