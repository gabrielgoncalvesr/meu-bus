const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Trip, Route } = require('../../../app/models');

const searchTripByRouteId = async (req, res) => {
    const { routeId } = req.query;

    try {
        const results = await Trip.findAll({
            where: {
                routeId: routeId
            },
            include: [{
                model: Route
            }]
        });

        res.json(results);
    } catch (e) {
        res.status(404).json({ message: "error getting results" });
    }
}

module.exports.searchTripByRouteId = searchTripByRouteId;