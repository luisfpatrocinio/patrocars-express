"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMontadora = exports.getAllMontadoras = void 0;
const montadoras = [
    { name: "Fiat", foundationYear: 1899, country: "Itália" },
    { name: "Hyundai", foundationYear: 1967, country: "Coréia do Sul" },
    { name: "BMW", foundationYear: 1916, country: "Alemanha" },
];
function getAllMontadoras() {
    return montadoras;
}
exports.getAllMontadoras = getAllMontadoras;
function createMontadora(montadoraObj) {
    montadoras.push(montadoraObj);
}
exports.createMontadora = createMontadora;
