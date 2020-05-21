module.exports = (sequelize, DataTypes) => {
    const Bus = sequelize.define('Bus', {
        routeId: DataTypes.STRING,
        agencyId: DataTypes.INTEGER,
        routeShortName: DataTypes.STRING,
        routeLongName: DataTypes.STRING,
        routeType: DataTypes.INTEGER,
        routeColor: DataTypes.STRING,
        routeTextColor: DataTypes.STRING,
    });

    return Bus;
}