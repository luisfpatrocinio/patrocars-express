"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMontadoraById = exports.createMontadora = exports.getAllMontadoras = void 0;
const montadoras = [
    { id: 1, name: "Fiat", foundationYear: 1899, country: "Itália" },
    { id: 2, name: "Hyundai", foundationYear: 1967, country: "Coréia do Sul" },
    { id: 3, name: "BMW", foundationYear: 1916, country: "Alemanha" },
];
function getAllMontadoras() {
    return montadoras;
}
exports.getAllMontadoras = getAllMontadoras;
function createMontadora(montadoraObj) {
    montadoras.push(montadoraObj);
}
exports.createMontadora = createMontadora;
function deleteMontadoraById(montadoraId) {
    const index = montadoras.findIndex((montadora) => montadora.id === montadoraId);
    if (index !== -1) {
        montadoras.splice(index, 1);
    }
}
exports.deleteMontadoraById = deleteMontadoraById;
