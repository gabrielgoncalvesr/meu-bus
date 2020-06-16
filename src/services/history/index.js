const { findHistory, saveHistory } = require('../../repository/history');

const searchHistory = async (request, response) => {
    const { userId } = request.query;

    console.log("2")

    if (!userId) {
        return response.status(400).json({ message: "missing routeId" });
    }

    const result = await findHistory({ userId });
    console.log(result)
    response.json(result);
}

const createHistory = async (request, response) => {
    const { userId, busId } = request.body;

    console.log("2")

    if (!userId || !busId) {
        return response.status(400).json({ message: "missing params" });
    }

    const result = await saveHistory({ userId, busId });
    console.log()

    if (!result) {
        return response.status(400).json({ message: "Cannot create or update data" })
    }

    return response.sendStatus(200);
}

module.exports = {
    searchHistory,
    createHistory
};