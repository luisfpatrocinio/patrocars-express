import { Router } from "express";
import {
  criarMontadoras,
  processarMontadoraCriada,
  showMontadoras,
} from "../controllers/montadorasController";

// Cria uma instância do Router.
const router = Router();

// Definir as rotas desse router.
router.get("/", showMontadoras);
router.get("/criar", criarMontadoras);
router.post("/criar/processarMontadora", processarMontadoraCriada);

// Exportar o router usando um alias.
export { router as montadorasRoutes };
