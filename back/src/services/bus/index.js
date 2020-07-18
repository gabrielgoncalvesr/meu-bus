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
    const { busId, direction } = req.query;

    const result = await findBusTripsByBusCode({ busId, direction });

    res.json(result);
}

module.exports = {
    searchBuses,
    searchBusTripsByBusCode
}