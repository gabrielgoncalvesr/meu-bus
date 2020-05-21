const express = require('express');
const router = express.Router();

const {
    searchTripByRouteId,
} = require('../../services/trip');

router.get('/:routeId', searchTripByRouteId);

module.exports.router = router;