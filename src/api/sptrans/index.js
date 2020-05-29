const express = require('express');
const router = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');
const { searchLine, searchPosition } = require('../../services/sptrans');

router.get('/search/line', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        term: Joi.string()
    })
}), searchLine);

router.get('/search/position', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        code: Joi.string()
    })
}), searchPosition);

module.exports.router = router;