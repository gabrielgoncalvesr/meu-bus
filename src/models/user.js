const db = require('./index');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});

module.exports = User;