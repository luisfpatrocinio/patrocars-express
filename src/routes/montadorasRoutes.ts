import { Router } from "express";
import {
  criarMontadoras,
  editMontadora,
  processarMontadoraCriada,
  processarMontadoraDeletada,
  processarMontadoraEditada,
  showMontadoras,
} from "../controllers/montadorasController";

// Cria uma instância do Router.
const router = Router();

// Definir as rotas desse router.
router.get("/", showMontadoras);
router.get("/criar", criarMontadoras);
router.post("/criar/processarMontadora", processarMontadoraCriada);
router.post("/deleteMontadora/:id", processarMontadoraDeletada);
router.put("/edit/:id", editMontadora);
router.post("/editingMontadora/:id", processarMontadoraEditada);

// Exportar o router usando um alias.
export { router as montadorasRoutes };
