module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define('Trip', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        routeId: {
            unique: true,
            type: DataTypes.BIGINT,
        },
        busId: {
            type: DataTypes.STRING,
            references: {
                model: "buses",
                key: "id"
            }
        },
        serviceId: DataTypes.STRING,
        tripId: {
            unique: true,
            type: DataTypes.STRING
        },
        headsign: DataTypes.STRING,
        direction: DataTypes.INTEGER,
    });

    Trip.associate = function (models) {
        Trip.belongsTo(models.Bus, { foreignKey: 'busId', targetKey: 'id' });
    }

    Trip.associate = function (models) {
        Trip.hasMany(models.Route, { foreignKey: 'routeId', sourceKey: 'routeId' });
    }

    return Trip;
}