const { findStopRoute } = require('../../repository/stop');

const searchStopRoute = async (req, res) => {
    const { tripId } = req.query;

    const result = await findStopRoute({ tripId });

    res.json(result)
}

module.exports = {
    searchStopRoute
}