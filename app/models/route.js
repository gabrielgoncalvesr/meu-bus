module.exports = (sequelize, DataTypes) => {
    const Route = sequelize.define('Route', {
        routeId: {
            type: DataTypes.STRING,
            references: {
                model: "trips",
                key: "routeId"
            }
        },
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        sequence: DataTypes.STRING,
        distanceTraveled: DataTypes.STRING,
    });

    Route.associate = function (models) {
        Route.belongsTo(models.Trip, { foreignKey: 'routeId' });
    }

    return Route;
}