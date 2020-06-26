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

module.exports = {
    createUser,
    getUser
}