module.exports = (sequelize, DataTypes) => {
    const Stop = sequelize.define('Stop', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        latitude: DataTypes.DECIMAL(8, 6),
        longitude: DataTypes.DECIMAL(8, 6),
    });


    Stop.associate = function (models) {
        Stop.hasMany(models.StopRoute, { foreignKey: 'stopId' });
    }

    return Stop;
}