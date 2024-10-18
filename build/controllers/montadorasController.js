"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarMontadoraCriada = exports.criarMontadoras = exports.showMontadoras = void 0;
const montadorasRepository_1 = require("../repositories/montadorasRepository");
function showMontadoras(req, res) {
    // TODO: Obter montadoras a partir do repository.
    const montadoras = (0, montadorasRepository_1.getAllMontadoras)();
    // Aqui o servidor vai precisar criar uma página e me devolver como response.
    res.render("montadorasList", {
        title: "Exibindo as Montadoras",
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
