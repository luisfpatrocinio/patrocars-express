"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMontadoras = void 0;
function showMontadoras(req, res) {
    const montadoras = ['patro', 'xamã', 'ryan'];
    // Aqui o servidor vai precisar criar uma página e me devolver como response.
    res.render("montadorasList", {
        title: "Exibindo as Montadoras",
        montadoras: montadoras
    });
}
exports.showMontadoras = showMontadoras;
