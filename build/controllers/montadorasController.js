"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarMontadoraDeletada = exports.processarMontadoraCriada = exports.criarMontadoras = exports.showMontadoras = void 0;
const montadorasRepository_1 = require("../repositories/montadorasRepository");
function showMontadoras(req, res) {
    const montadoras = (0, montadorasRepository_1.getAllMontadoras)();
    const title = montadoras.length > 0
        ? "Exibindo as Montadoras"
        : "Não há montadoras criadas";
    // Aqui o servidor vai precisar criar uma página e me devolver como response.
    res.render("montadorasList", {
        title: title,
        montadoras: montadoras,
    });
}
exports.showMontadoras = showMontadoras;
function criarMontadoras(req, res) {
    res.render("montadorasCreate", {
        title: "Criar Montadora",
    });
}
exports.criarMontadoras = criarMontadoras;
function processarMontadoraCriada(req, res) {
    const montadoraCriada = req.body;
    console.log(montadoraCriada);
    // Adicionar montadora criada no repository.
    (0, montadorasRepository_1.createMontadora)(montadoraCriada);
    res.redirect("/montadoras/");
}
exports.processarMontadoraCriada = processarMontadoraCriada;
function processarMontadoraDeletada(req, res) {
    const id = Number(req.params.id);
    console.log("Deletando a montadora de ID: " + String(id));
    (0, montadorasRepository_1.deleteMontadoraById)(id);
    res.redirect("/montadoras/");
}
exports.processarMontadoraDeletada = processarMontadoraDeletada;
