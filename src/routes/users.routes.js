import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const usersRoutes = Router();

usersRoutes.get('/', UserController.index);
usersRoutes.get('/:id', UserController.show);

usersRoutes.post('/', UserController.store);
usersRoutes.put('/', loginRequired, UserController.update);
usersRoutes.delete('/', loginRequired, UserController.delete);

export default usersRoutes;
