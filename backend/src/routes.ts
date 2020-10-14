import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// MVC (Model / View / Controllers)

routes.post('/orphanages', OrphanagesController.create);

export default routes;  