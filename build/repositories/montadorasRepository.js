"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMontadora = exports.getAllMontadoras = void 0;
const montadoras = [
    { name: "ryan faustino", foundationYear: 2020, country: "Brazil" },
    { name: "xamã cardoso", foundationYear: 2018, country: "Brazil" },
    {
        name: "luis felipe dos santos patrocinio",
        foundationYear: 2019,
        country: "Brazil",
    },
];
function getAllMontadoras() {
    return montadoras;
}
exports.getAllMontadoras = getAllMontadoras;
function createMontadora(montadoraObj) {
    montadoras.push(montadoraObj);
}
exports.createMontadora = createMontadora;
