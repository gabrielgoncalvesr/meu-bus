module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Buses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.STRING,
			},
			agencyId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			shortName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			longName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			type: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			color: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			textColor: {
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