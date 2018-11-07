import { Router } from 'restify-router';  
import controller from '../controllers/home.controller'; 
const router = new Router();

router.get('/home/:name', controller.index);  
router.del('/home/:id', controller.remove);  

export default router;