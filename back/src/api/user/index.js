const express = require('express');
const router = express.Router();

const {
    updateImage,
} = require('../../services/user');

router.put('/profilePhoto', updateImage);

module.exports.router = router;