const express = require('express');
const router = express.Router();

const busRoutes = require('./api/bus');
const userRoutes = require('./api/sptrans');

router.use('/bus', busRoutes.router);
router.use('/sptrans', userRoutes.router);

module.exports = router;