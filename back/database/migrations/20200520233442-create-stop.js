module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Stops', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.BIGINT,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			description: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			latitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(8, 6),
			},
			longitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(8, 6),
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
		return queryInterface.dropTable('Stops');
	}
};