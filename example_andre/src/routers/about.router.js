import { Router } from 'restify-router';  
const router = new Router();

router.get('/about/', index);  

function index(req, res, next) {  
    res.send('Página about');
    next();
}

export default router;  