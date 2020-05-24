module.exports = (sequelize, DataTypes) => {
    const Route = sequelize.define('Route', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        routeId: {
            type: DataTypes.BIGINT,
            references: {
                model: "trips",
                key: "routeId"
            }
        },
        latitude: DataTypes.DECIMAL(8, 6),
        longitude: DataTypes.DECIMAL(8, 6),
        sequence: DataTypes.INTEGER,
        distanceTraveled: DataTypes.DECIMAL(10, 4),
    });

    Route.associate = function (models) {
        Route.belongsTo(models.Trip, { foreignKey: 'routeId', targetKey: 'routeId' });
    }

    return Route;
}