const { post } = require('../../../utils/request')

const loginSPTrans = () => {
    console.log("TESTE")
    const response = post(`${process.env.SPTRANS_API_URL}/Login/Autenticar`, `?token=${process.env.SPTRANS_API_TOKEN}`);
    console.log(response)
}

module.exports.loginSPTrans = loginSPTrans;