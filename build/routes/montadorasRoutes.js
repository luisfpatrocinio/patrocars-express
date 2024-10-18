"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.montadorasRoutes = void 0;
const express_1 = require("express");
const montadorasController_1 = require("../controllers/montadorasController");
// Cria uma instância do Router.
const router = (0, express_1.Router)();
exports.montadorasRoutes = router;
// Definir as rotas desse router.
router.get('/', montadorasController_1.showMontadoras);
