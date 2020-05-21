const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Trip, Route } = require('../../../app/models');

const searchTrips = async (req, res) => {
    const { routeId } = req.query;

    if (!routeId) {
        return res.status(400).json({ message: "missing routeId" });
    }

    let where = {};

    let options = {
        order: [
            ['Routes', 'routeId', 'ASC'],
            ['Routes', 'sequence', 'ASC']
        ],
        include: [{
            model: Route,
            as: 'Routes'
        }]
    };

    if (routeId) {
        where['routeId'] = routeId;
    }

    options['where'] = where;

    try {
        const results = await Trip.findAll(options);

        res.json(results);
    } catch (e) {
        res.status(404).json({ message: "error getting results" });
    }
}

module.exports.searchTrips = searchTrips;