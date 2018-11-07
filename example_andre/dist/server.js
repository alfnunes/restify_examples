'use strict';

var _restify = require('restify');

var _log = require('./middlewares/log.middleware');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _restify.createServer)();

server.use(_restify.plugins.bodyParser());

server.on('error', function (err, context) {
    console.log(err);
});

server.use(_log2.default);
require('./routers').register(server);

server.listen(3000, function () {
    return console.log('listen in ' + server.url);
});