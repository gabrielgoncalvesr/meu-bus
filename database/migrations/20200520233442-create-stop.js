module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Stops', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			stopId: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.BIGINT,
			},
			stopName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			stopDesc: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			stopLatitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(8, 6),
			},
			stopLongitude: {
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