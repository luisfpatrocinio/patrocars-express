const montadoras: Array<any> = [
  { id: 1, name: "Fiat", foundationYear: 1899, country: "Itália" },
  { id: 2, name: "Hyundai", foundationYear: 1967, country: "Coréia do Sul" },
  { id: 3, name: "BMW", foundationYear: 1916, country: "Alemanha" },
];

export function getAllMontadoras(): Array<any> {
  return montadoras;
}

export function createMontadora(montadoraObj: object): void {
  montadoras.push(montadoraObj);
}

export function deleteMontadoraById(montadoraId: Number): void {
  const index = montadoras.findIndex(
    (montadora) => montadora.id === montadoraId
  );
  if (index !== -1) {
    montadoras.splice(index, 1);
  }
}
