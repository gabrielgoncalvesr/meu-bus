const express = require('express');
const router = express.Router();

const { searchLine, searchPosition } = require('../../services/sptrans');

router.get('/search/line', searchLine);

router.get('/search/position', searchPosition);

module.exports.router = router;