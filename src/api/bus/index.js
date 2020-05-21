const express = require('express');
const router = express.Router();

const { Bus } = require('../../../app/models');


router.get('/', async (req, res) => {
    const result = await Bus.findAll();
    res.send(result);
});


module.exports.router = router;