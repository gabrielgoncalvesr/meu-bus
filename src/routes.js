const express = require('express');
const router = express.Router();

const busRoutes = require('./api/bus');
const stopRoutes = require('./api/stop');
const tripRoutes = require('./api/trip');
const userRoutes = require('./api/sptrans');
const historyRoutes = require('./api/history');

router.use('/trip', tripRoutes.router);
router.use('/sptrans', userRoutes.router);
router.use('/history', historyRoutes.router);

// router.use('/stop', stopRoutes.router);
router.use('/bus', busRoutes.router);


module.exports = router;