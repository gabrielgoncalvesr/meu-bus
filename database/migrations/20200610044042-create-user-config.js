module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('UserConfigs', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				references: {
					model: "Users",
					key: "id"
				}
			},
			theme: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			language: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			profilePhoto: {
				allowNull: false,
				type: DataTypes.STRING
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},

	down: (queryInterface) => {
		return queryInterface.dropTable('UserConfigs');
	}
};