const express = require('express');
const router = express.Router();

const {
    searchTrips,
} = require('../../services/trip');

router.get('/', searchTrips);

module.exports.router = router;