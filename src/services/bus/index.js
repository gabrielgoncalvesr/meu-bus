const {
    findBuses,
    findBusTripsByBusCode
} = require('../../repository/bus');

const searchBuses = async (req, res) => {
    const params = req.query;

    const result = await findBuses({ ...params });
    res.header('X-Total-Count', result.count);
    res.json(result.rows.map(item => item['dataValues']));
}

const searchBusTripsByBusCode = async (req, res) => {
    const params = req.query;

    const result = await findBusTripsByBusCode({ ...params });

    res.header('X-Total-Count', result.count);
    res.json(result.rows.map(item => item['dataValues']));
}

module.exports = {
    searchBuses,
    searchBusTripsByBusCode
}