const { post, get } = require('../../../utils/request')
const { parseSetCookies } = require('../../../utils/functions')

let headers = null;
let apiCredentials = null;

const loginSPTrans = async () => {
    const response = await post(`${process.env.SPTRANS_API_URL}/Login/Autenticar`, `token=${process.env.SPTRANS_API_TOKEN}`);

    if (response.status == 200) {
        const setCookies = parseSetCookies(response.headers['set-cookie'][0]);
        apiCredentials = setCookies['apiCredentials'];

        headers = { Cookie: `apiCredentials=${apiCredentials}` }
    }
}

const searchLine = async (searchByTerm) => {
    const response = await get(`${process.env.SPTRANS_API_URL}/Linha/Buscar`, `termosBusca=${searchByTerm}`, headers);

    return response.data.map(item => {
        return {
            circularMode: item['lc'],
            lineDirection: item['sl'],
            lineIdentifier: item['cl'],
            firstNumericSign: item['lt'],
            secondNumericSign: item['tl'],
            descriptiveSignReturn: item['ts'],
            descriptiveSignOutward: item['tp']
        }
    });
}

module.exports.searchLine = searchLine;
module.exports.loginSPTrans = loginSPTrans;