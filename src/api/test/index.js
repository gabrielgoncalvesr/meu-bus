const express = require('express');
const router = express.Router();

const { User } = require('../../models/user');

router.get('/', function (req, res) {
    User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });
});

router.post('/', function (req, res) {
    // Create user
    res.send('Some response.');
});

module.exports.router = router;