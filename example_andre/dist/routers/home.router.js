'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restifyRouter = require('restify-router');

var _home = require('../controllers/home.controller');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _restifyRouter.Router();

router.get('/home/:name', _home2.default.index);
router.del('/home/:id', _home2.default.remove);

exports.default = router;