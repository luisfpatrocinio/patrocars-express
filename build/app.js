"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const montadorasRoutes_1 = require("./routes/montadorasRoutes");
// Instancia do Express
const app = (0, express_1.default)();
// Confiurações do App
app.set("views", "./templates");
app.set("view engine", "pug");
// Rota de Teste
app.get("/", (req, res) => {
    res.render("index", {
        title: "Saudações!!!",
        message: "Olár galerínea.",
    });
});
// Configurar rotas
app.use('/montadoras', montadorasRoutes_1.montadorasRoutes);
exports.default = app;
