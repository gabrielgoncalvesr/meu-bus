const { findTrip } = require('../../repository/trip');

const searchTrips = async (request, response) => {
    const { routeId } = request.query;

    if (!routeId) {
        return res.status(400).json({ message: "missing routeId" });
    }

    const result = await findTrip({ routeId });
    response.json(result);
}

module.exports.searchTrips = searchTrips;