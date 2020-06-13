module.exports = (sequelize, DataTypes) => {
    const UserConfig = sequelize.define('UserConfig', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        theme: DataTypes.TEXT,
        language: DataTypes.STRING,
        profilePhoto: DataTypes.STRING
    });

    UserConfig.associate = function (models) {
        UserConfig.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
    }

    return UserConfig;
}