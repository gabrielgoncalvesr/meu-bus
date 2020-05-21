module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Buses', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			routeId: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.STRING,
			},
			agencyId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			routeShortName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			routeLongName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			routeType: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			routeColor: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			routeTextColor: {
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
		return queryInterface.dropTable('Buses');
	}
};