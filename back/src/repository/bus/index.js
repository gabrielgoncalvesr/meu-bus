const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Bus, Trip, Route } = require('../../../app/models');

const findBuses = async ({
    id,
    name,
    searchTerm,
    page = 0,
    limit = 30
}) => {
    const where = {};

    const options = {
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

    return await Bus.findAndCountAll(options)
        .then(result => {
            return result;
        });
}

const findBusTripsByBusCode = async ({ busId, direction }) => {
    const options = {

        where: {
            direction: direction,
            busId: busId
        },
        include: [{
            model: Route,
            as: 'Routes',
            order: [['id', 'ASC']],
        }]
    }

    return await Trip.findOne(options)
        .then(result => {
            return result;
        });
}

module.exports = {
    findBuses,
    findBusTripsByBusCode
}