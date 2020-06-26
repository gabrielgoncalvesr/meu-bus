const express = require('express');
const router = express.Router();

const { authenticateJWT } = require('../utils/jwt');

const loginRoutes = require('./api/login');
const busRoutes = require('./api/bus');
const stopRoutes = require('./api/stop');
const tripRoutes = require('./api/trip');
const userRoutes = require('./api/sptrans');
const historyRoutes = require('./api/history');

router.use('/', loginRoutes.router);
router.use('/sptrans', userRoutes.router);
router.use('/bus', authenticateJWT, busRoutes.router);
router.use('/stop', authenticateJWT, stopRoutes.router);
router.use('/trip', authenticateJWT, tripRoutes.router);
router.use('/history', authenticateJWT, historyRoutes.router);

module.exports = router;