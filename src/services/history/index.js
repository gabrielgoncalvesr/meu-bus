const { findHistory, saveHistory } = require('../../repository/history');

const searchHistory = async (request, response) => {
    const { userId } = request.query;

    if (!userId) {
        return response.status(400).json({ message: "missing routeId" });
    }

    const result = await findHistory({ userId });
    response.json(result);
}

const createHistory = async (request, response) => {
    const { userId, busId } = request.body;

    if (!userId || !busId) {
        return response.status(400).json({ message: "missing params" });
    }

    const result = await saveHistory({ userId, busId });

    if (!result) {
        return response.status(400).json({ message: "Cannot create or update data" })
    }

    return response.sendStatus(200);
}

module.exports = {
    searchHistory,
    createHistory
};