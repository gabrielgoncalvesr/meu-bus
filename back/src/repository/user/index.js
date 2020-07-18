const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { User } = require('../../../app/models');

const getUser = async ({ email }) => {
    return await User.findOne({
        raw: true,
        where: {
            email
        }
    }).then(result => {
        return result;
    });
}

const createUser = async ({ name, email, password, profilePhoto }) => {
    return User.create({ name, email, password, profilePhoto });
}

const updateProfilePhoto = async ({ email, profilePhoto }) => {
    return await User.findOne({
        where: {
            email
        }
    }).then(result => {
        if (!result) {
            return null;
        }

        result.changed('updatedAt', true);
        result.set({ updatedAt: new Date(), profilePhoto }, { raw: true });

        return result.save({
            silent: true,
            fields: ['updatedAt']
        });
    })
}

module.exports = {
    getUser,
    createUser,
    updateProfilePhoto,
}