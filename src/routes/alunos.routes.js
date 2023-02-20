import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const alunosRoutes = Router();

alunosRoutes.get('/', AlunoController.index);
alunosRoutes.get('/:id', AlunoController.show);

alunosRoutes.post('/', loginRequired, AlunoController.store);
alunosRoutes.put('/:id', loginRequired, AlunoController.update);
alunosRoutes.delete('/:id', loginRequired, AlunoController.delete);

export default alunosRoutes;
