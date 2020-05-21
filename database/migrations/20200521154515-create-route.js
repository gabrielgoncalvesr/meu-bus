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
				type: DataTypes.STRING,
				references: {
					model: "Trips",
					key: "routeId"
				}
			},
			latitude: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			longitude: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			sequence: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			distanceTraveled: {
				allowNull: false,
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
		return queryInterface.dropTable('Routes');
	}
};