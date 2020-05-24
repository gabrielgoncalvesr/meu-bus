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
			id: {
				allowNull: false,
				primaryKey: true,
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
				unique: true,
				allowNull: false,
				type: DataTypes.BIGINT,
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