module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define('Trip', {
        routeId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        busId: {
            type: DataTypes.STRING,
            references: {
                model: "buses",
                key: "id"
            }
        },
        serviceId: DataTypes.STRING,
        tripId: DataTypes.STRING,
        headsign: DataTypes.STRING,
        direction: DataTypes.INTEGER,
    });

    Trip.associate = function (models) {
        Trip.belongsTo(models.Bus);
    }

    Trip.associate = function (models) {
        Trip.hasMany(models.Route, { foreignKey: 'routeId' });
    }

    return Trip;
}