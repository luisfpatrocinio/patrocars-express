import express, { Request, Response } from "express";
import { montadorasRoutes } from "./routes/montadorasRoutes";

import bodyParser from "body-parser";
import multer from "multer";

const upload = multer();

// Instancia do Express
const app = express();

// Confiurações do App
app.set("views", "./templates");
app.set("view engine", "pug");

// Para Parsear JSON
app.use(bodyParser.json());

// Para Parsear Form
app.use(bodyParser.urlencoded({ extended: true }));

// Para Parsear Multipart/form-data (que envolve arquivos)
app.use(upload.array("tissaum"));
app.use(express.static('public'));

// Configurar rotas
app.use("/montadoras", montadorasRoutes);

export default app;
