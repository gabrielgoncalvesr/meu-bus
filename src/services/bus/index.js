const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Bus, Trip } = require('../../../app/models');

const searchBuses = async (req, res) => {
    const { id, name } = req.query;

    let where = {};

    let options = {
        order: [['id', 'ASC']]
    };

    if (id) {
        where['id'] = { [Op.like]: id + "%" };
    }
    if (name) {
        where['longName'] = { [Op.like]: name + "%" };
    }

    if (Object.keys(where).length > 0) {
        options['where'] = where;
    }

    try {
        const results = await Bus.findAll(options);

        res.json(results);
    } catch (e) {
        res.status(404).json({ message: "error getting results" });
    }
}

const searchBusTripsByBusCode = async (req, res) => {
    const { busCode } = req.query;

    try {
        const results = await Bus.findAll({
            where: {
                id: {
                    [Op.like]: busCode
                }
            },
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Trip,
                as: 'Trips'
            }]
        });

        res.json(results);
    } catch (e) {
        res.status(404).json({ message: "error getting results" });
    }
}

module.exports.searchBuses = searchBuses;
module.exports.searchBusTripsByBusCode = searchBusTripsByBusCode;