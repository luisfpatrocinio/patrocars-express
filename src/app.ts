import express, { Request, Response } from "express";
import { montadorasRoutes } from "./routes/montadorasRoutes";

// Instancia do Express
const app = express();

// Confiurações do App
app.set("views", "./templates");
app.set("view engine", "pug");

// Rota de Teste
app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Saudações!!!",
    message: "Olár galerínea.",
  });
});

// Configurar rotas
app.use('/montadoras', montadorasRoutes);

export default app;