// const { Stop, StopRoute } = require('../../../app/models');

// const findStopRoute = async ({ tripId }) => {
//     return await StopRoute.findAndCountAll({
//         where: {
//             tripId: tripId
//         },
//         order: [
//             ['sequence', 'ASC']
//         ],
//         include: [{
//             model: Stop,
//             as: 'Stop'
//         }]
//     }).then(result => {
//         return result;
//     });
// }

// module.exports = {
//     findStopRoute
// }