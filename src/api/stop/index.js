const express = require('express');
const router = express.Router();

const {
    searchStopRoute
} = require('../../services/stop');

router.get('/route', searchStopRoute);

module.exports.router = router;