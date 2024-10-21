"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMontadora = exports.deleteMontadoraById = exports.createMontadora = exports.getAllMontadoras = void 0;
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
/**
 * Deletes a montadora from the montadoras array by its ID.
 *
 * @param montadoraId - The ID of the montadora to be deleted.
 * @remarks
 * This function searches for the montadora with the specified ID in the montadoras array.
 * If found, it removes the montadora from the array.
 * If the montadora is not found, no action is taken.
 */
function deleteMontadoraById(montadoraId) {
    const index = montadoras.findIndex((montadora) => montadora.id === montadoraId);
    if (index !== -1) {
        montadoras.splice(index, 1);
    }
}
exports.deleteMontadoraById = deleteMontadoraById;
/**
 * Updates a montadora in the montadoras array.
 */
function updateMontadora(montadoraObj) {
    const montadoras = getAllMontadoras();
    const index = montadoras.findIndex((montadora) => montadora.id === montadoraObj.id);
    montadoras[index] = montadoraObj;
}
exports.updateMontadora = updateMontadora;
