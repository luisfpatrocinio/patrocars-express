"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Instancia do Express
const app = (0, express_1.default)();
const PORT = 3000;
app.set("views", "./templates");
app.set("view engine", "pug");
app.get("/", (req, res) => {
    res.render("index", {
        title: "Saudações!!!",
        message: "Olár galerínea.",
    });
});
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
