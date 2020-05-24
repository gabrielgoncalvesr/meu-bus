module.exports = (sequelize, DataTypes) => {
    const StopRoute = sequelize.define('StopRoute', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        stopId: {
            type: DataTypes.BIGINT,
            references: {
                model: "stops",
                key: "id"
            }
        },
        tripId: {
            type: DataTypes.STRING,
            references: {
                model: "trips",
                key: "id"
            }
        },
        arrivalTime: DataTypes.TIME,
        departureTime: DataTypes.TIME,
        sequence: DataTypes.INTEGER
    });

    StopRoute.associate = function (models) {
        StopRoute.belongsTo(models.Stop);
    }

    return StopRoute;
}