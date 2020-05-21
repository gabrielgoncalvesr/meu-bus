const express = require('express');
const router = express.Router();

const {
    searchBuses,
    searchBusTripsByBusCode,
} = require('../../services/bus');

router.get('/', searchBuses);
router.get('/trip', searchBusTripsByBusCode);

module.exports.router = router;