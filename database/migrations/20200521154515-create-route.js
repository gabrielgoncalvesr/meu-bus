module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Routes', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			routeId: {
				allowNull: false,
				type: DataTypes.BIGINT,
				references: {
					model: "Trips",
					key: "routeId"
				}
			},
			latitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(8, 6),
			},
			longitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(8, 6),
			},
			sequence: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			distanceTraveled: {
				allowNull: false,
				type: DataTypes.DECIMAL(10, 4),
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
		return queryInterface.dropTable('Routes');
	}
};