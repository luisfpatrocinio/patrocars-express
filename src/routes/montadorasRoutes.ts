import { Router } from 'express';
import { showMontadoras } from '../controllers/montadorasController';

// Cria uma instância do Router.
const router = Router();

// Definir as rotas desse router.
router.get('/', showMontadoras);

// Exportar o router usando um alias.
export { router as montadorasRoutes };