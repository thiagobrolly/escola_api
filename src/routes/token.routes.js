import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const usersRoutes = Router();

usersRoutes.post('/', TokenController.store);

export default usersRoutes;
