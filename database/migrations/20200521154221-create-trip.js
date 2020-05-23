module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Trips', {
			busId: {
				allowNull: false,
				type: DataTypes.STRING,
				references: {
					model: "Buses",
					key: "id"
				}
			},
			serviceId: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			tripId: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			headsign: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			direction: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			routeId: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.STRING,
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
		return queryInterface.dropTable('Trips');
	}
};