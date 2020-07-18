module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Histories', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			busId: {
				allowNull: false,
				type: DataTypes.STRING,
				references: {
					model: "Buses",
					key: "id"
				}
			},
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Histories');
    }
};