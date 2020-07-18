const { History, Bus } = require('../../../app/models');

const findHistory = async ({ userId }) => {
    const options = {
        include: [{
            model: History,
            as: 'history',
            where: {
                userId
            }
        }]
    };

    return await Bus.findAll(options);
}

const saveHistory = async ({ busId, userId }) => {
    return await History.findOne({
        where: {
            busId,
            userId
        }
    }).then(result => {
        if (!result) {
            return History.create({ busId, userId });
        }

        result.changed('updatedAt', true);
        result.set({ updatedAt: new Date() }, { raw: true });

        return result.save({
            silent: true,
            fields: ['updatedAt']
        });
    })
}

module.exports = {
    findHistory,
    saveHistory
}