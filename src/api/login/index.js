const express = require('express');
const router = express.Router();

const {
    login,
    createNewUser
} = require('../../services/login');

router.post('/login', login);
router.post('/user/create', createNewUser);

module.exports.router = router;