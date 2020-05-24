const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Bus, Trip, Route } = require('../../../app/models');

const searchBuses = async (req, res) => {
    const { id, name, searchTerm, page = 0, limit = 30 } = req.query;

    let where = {};

    let options = {
        order: [['id', 'ASC']],
        limit: limit,
        offset: (page * limit),
    };

    if (searchTerm) {
        options['where'] = {
            [Op.or]: [
                { id: { [Op.like]: searchTerm + "%" } },
                { longName: { [Op.like]: searchTerm + "%" } }
            ]
        }
    } else {
        if (id) {
            where['id'] = id;
        }

        if (name) {
            where['longName'] = name;
        }
    }

    if (Object.keys(where).length > 0) {
        options['where'] = where;
    }

    try {
        await Bus.findAndCountAll(options)
            .then(result => {
                res.header('X-Total-Count', result.count);
                res.json(result.rows.map(item => item['dataValues']));
            });
    } catch (e) {
        res.status(404).json({ message: "error getting results" });
    }
}

const searchBusTripsByBusCode = async (req, res) => {
    const { busCode, direction } = req.query;

    try {
        await Bus.findAndCountAll({
            where: {
                id: { [Op.like]: busCode }
            },
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Trip,
                as: 'Trips',
                where: { direction: direction },
                include: [{
                    model: Route,
                    as: 'Routes'
                }]
            }]
        }).then(result => {
            res.header('X-Total-Count', result.count);
            res.json(result.rows.map(item => item['dataValues']));
        });
    } catch (e) {
        console.log(e)
        res.status(404).json({ message: "error getting results" });
    }
}

module.exports.searchBuses = searchBuses;
module.exports.searchBusTripsByBusCode = searchBusTripsByBusCode;