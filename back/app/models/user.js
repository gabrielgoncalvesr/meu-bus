module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profilePhoto: DataTypes.STRING,
        name: DataTypes.STRING
    });

    User.associate = function (models) {
        User.hasMany(models.History, { foreignKey: 'userId', sourceKey: 'id' });
    }

    return User;
}