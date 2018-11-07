import { createServer, plugins} from 'restify';
import logMiddleware from './middlewares/log.middleware';

const server = createServer();

server.use(plugins.bodyParser());

server.on('error', function(err, context) {   
    console.log(err);
});

server.use(logMiddleware);
require('./routers').register(server);

server.listen(3000, () => console.log(`listen in ${server.url}`));