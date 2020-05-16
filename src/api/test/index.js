const express = require('express');
const router = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');
const { searchLine, serchPosition } = require('../../services/sptrans');

router.get('/search/line', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        term: Joi.string()
    })
}), searchLine);

router.get('/search/position', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        code: Joi.string()
    })
}), serchPosition);

module.exports.router = router;