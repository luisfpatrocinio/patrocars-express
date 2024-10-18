import express, { Request, Response } from "express";

// Instancia do Express
const app = express();
const PORT = 3000;

app.set("views", "./templates");
app.set("view engine", "pug");

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Saudações!!!",
    message: "Olár galerínea.",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
