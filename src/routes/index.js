import { Router } from 'express';
import usersRoutes from './users.routes';
import tokenRoutes from './token.routes';
import alunosRoutes from './alunos.routes';
import fotoRoutes from './foto.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/tokens', tokenRoutes);
routes.use('/alunos', alunosRoutes);
routes.use('/fotos', fotoRoutes);

export default routes;
