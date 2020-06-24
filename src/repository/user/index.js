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

const updateUser = async (user) => {
    return await User.update(
        { ...user },
        {
            where: {
                email: user.email
            }
        }
    ).success(result => {
        return true;
    }).error(err => {
        return false;
    });
}

module.exports = {
    updateUser,
    getUser
}