import homeRouter from './home.router';
import aboutRouter from './about.router';

export function register(server) {     
    homeRouter.applyRoutes(server)   
    aboutRouter.applyRoutes(server)
} 