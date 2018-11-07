'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _restifyRouter = require('restify-router');

var router = new _restifyRouter.Router();

router.get('/about/', index);

function index(req, res, next) {
    res.send('Página about');
    next();
}

exports.default = router;