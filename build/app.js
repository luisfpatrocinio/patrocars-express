"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const montadorasRoutes_1 = require("./routes/montadorasRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
// Instancia do Express
const app = (0, express_1.default)();
// Confiurações do App
app.set("views", "./templates");
app.set("view engine", "pug");
// Para Parsear JSON
app.use(body_parser_1.default.json());
// Para Parsear Form
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Para Parsear Multipart/form-data (que envolve arquivos)
app.use(upload.array("tissaum"));
app.use(express_1.default.static("public"));
// Rota Inicial: Por enquanto, direcionar para montadoras.
app.get("/", (req, res) => {
    console.log("Rota raiz acessada. Redirecionando para Montadoras.");
    res.redirect("/montadoras/");
});
// Configurar rotas
app.use("/montadoras", montadorasRoutes_1.montadorasRoutes);
exports.default = app;
