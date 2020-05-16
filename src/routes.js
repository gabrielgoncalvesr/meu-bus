const express = require('express');
const router = express.Router();

const userRoutes = require('./api/test');

router.use('/sptrans', userRoutes.router);

module.exports = router;