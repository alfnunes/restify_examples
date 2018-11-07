'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = register;

var _home = require('./home.router');

var _home2 = _interopRequireDefault(_home);

var _about = require('./about.router');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(server) {
    _home2.default.applyRoutes(server);
    _about2.default.applyRoutes(server);
}