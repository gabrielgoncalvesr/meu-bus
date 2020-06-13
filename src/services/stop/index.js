// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// const { findStopRoute } = require('../../repository/stop');

// const searchStopRoute = async (request, response) => {
//     console.log(request.query)
//     const { tripId } = request.query;

//     console.log(tripId)

//     const result = await findStopRoute({ tripId });

//     console.log(result)
//     response.json({ "teste": "test" })
//     // response.header('X-Total-Count', result.count);
//     // response.json(result.rows.map(item => item['dataValues']));
// }

// module.exports = {
//     searchStopRoute
// }