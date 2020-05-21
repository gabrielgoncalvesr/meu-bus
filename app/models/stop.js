module.exports = (sequelize, DataTypes) => {
    const Stop = sequelize.define('Stop', {
        stopId: DataTypes.BIGINT,
        stopName: DataTypes.STRING,
        stopDesc: DataTypes.STRING,
        stopLatitude: DataTypes.DECIMAL(8, 6),
        stopLongitude: DataTypes.DECIMAL(8, 6),
    });

    return Stop;
}