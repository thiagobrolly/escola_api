import { Router } from 'express';

import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const fotoRoutes = Router();

fotoRoutes.post('/', loginRequired, FotoController.store);

export default fotoRoutes;
