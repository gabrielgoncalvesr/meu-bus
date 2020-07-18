const { Trip, Route } = require('../../../app/models');

const findTrip = async ({ routeId }) => {
    const where = {};

    const options = {
        raw: true,
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

    return await Trip.findAll(options);
}

module.exports = {
    findTrip
}