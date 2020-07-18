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

const searchLine = async (req, res) => {
    const { term } = req.query;

    const response = await get(`${process.env.SPTRANS_API_URL}/Linha/Buscar`, `termosBusca=${term}`, headers);

    if (response && response.data) {
        const line = response.data.map(item => {
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

        return res.json(line);
    }
}

const searchPosition = async (req, res) => {
    const { code } = req.query;

    const response = await get(`${process.env.SPTRANS_API_URL}/Posicao/Linha`, `codigoLinha=${code}`, headers);

    if (response && response.data) {
        const vehicles = response.data['vs'].map(item => {
            return {
                captureTime: item['a'],
                vehiclePrefix: item['p'],
                vehicleAccessible: item['a'],
                latitudePosition: item['py'],
                longitudePosition: item['px'],
            }
        });

        return res.json(vehicles)
    }
}

module.exports = {
    searchLine,
    loginSPTrans,
    searchPosition,
}