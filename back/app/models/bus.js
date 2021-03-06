module.exports = (sequelize, DataTypes) => {
    const Bus = sequelize.define('Bus', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        agencyId: DataTypes.INTEGER,
        shortName: DataTypes.STRING,
        longName: DataTypes.STRING,
        type: DataTypes.INTEGER,
        color: DataTypes.STRING,
        textColor: DataTypes.STRING,
    });

    Bus.associate = function (models) {
        Bus.hasMany(models.Trip, { foreignKey: 'busId', sourceKey: 'id' });
    }

    Bus.associate = function (models) {
        Bus.hasMany(models.History, { foreignKey: 'busId', sourceKey: 'id', as: 'history'});
    }

    return Bus;
}