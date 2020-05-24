module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('StopRoutes', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			tripId: {
				allowNull: false,
				type: DataTypes.STRING,
				references: {
					model: "Trips",
					key: "tripId"
				}
			},
			arrivalTime: {
				allowNull: false,
				type: DataTypes.TIME,
			},
			departureTime: {
				allowNull: false,
				type: DataTypes.TIME,
			},
			stopId: {
				allowNull: false,
				type: DataTypes.BIGINT,
				references: {
					model: "Stops",
					key: "id"
				}
			},
			sequence: {
				allowNull: false,
				type: DataTypes.INTEGER,
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
		return queryInterface.dropTable('StopRoutes');
	}
};