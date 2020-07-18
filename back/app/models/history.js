module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        busId: {
            type: DataTypes.STRING,
            references: {
                model: "bus",
                key: "id"
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        }
    });

    History.associate = function (models) {
        History.belongsTo(models.Bus, { foreignKey: 'busId', targetKey: 'id', as: 'bus' });
    }

    History.associate = function (models) {
        History.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
    }

    return History;
}