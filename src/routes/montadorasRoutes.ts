import { Router } from "express";
import {
  criarMontadoras,
  processarMontadoraCriada,
  processarMontadoraDeletada,
  showMontadoras,
} from "../controllers/montadorasController";

// Cria uma instância do Router.
const router = Router();

// Definir as rotas desse router.
router.get("/", showMontadoras);
router.get("/criar", criarMontadoras);
router.post("/criar/processarMontadora", processarMontadoraCriada);
router.post("/deleteMontadora/:id", processarMontadoraDeletada);

// Exportar o router usando um alias.
export { router as montadorasRoutes };
