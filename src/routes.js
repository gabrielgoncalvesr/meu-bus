const express = require('express');
const router = express.Router();

const busRoutes = require('./api/bus');
const tripRoutes = require('./api/trip');
const userRoutes = require('./api/sptrans');

router.use('/bus', busRoutes.router);
router.use('/trip', tripRoutes.router);
router.use('/sptrans', userRoutes.router);

module.exports = router;