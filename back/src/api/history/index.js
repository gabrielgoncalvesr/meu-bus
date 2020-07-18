const express = require('express');
const router = express.Router();

const {
    searchHistory,
    createHistory
} = require('../../services/history');

router.get('/', searchHistory);
router.post('/', createHistory);

module.exports.router = router;