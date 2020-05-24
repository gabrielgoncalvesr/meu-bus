module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define('Trip', {
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
        id: {
            primaryKey: true,
            type: DataTypes.STRING
        },
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