const express = require('express');
const router = express.Router();

const { User } = require('../../../app/models');

router.get('/', function (req, res) {
    User.create({ name: 'Claio', email: 'claio@rocktseat.com.br', password: '12356' });
    res.send('Some response.');
});

router.post('/', function (req, res) {
    // Create user
    res.send('Some response.');
});

module.exports.router = router;