const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Stop, StopRoute, Route } = require('../../../app/models');

const searchStopRoute = async (req, res) => {
    const { tripId } = req.query;

    try {
        await StopRoute.findAndCountAll({
            where: {
                tripId: tripId
            },
            order: [
                ['sequence', 'ASC']
            ],
            include: [{
                model: Stop,
                as: 'Stop'
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

module.exports.searchStopRoute = searchStopRoute;