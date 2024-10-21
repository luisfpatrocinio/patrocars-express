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

/**
 * Deletes a montadora from the montadoras array by its ID.
 *
 * @param montadoraId - The ID of the montadora to be deleted.
 * @remarks
 * This function searches for the montadora with the specified ID in the montadoras array.
 * If found, it removes the montadora from the array.
 * If the montadora is not found, no action is taken.
 */
export function deleteMontadoraById(montadoraId: Number): void {
  const index = montadoras.findIndex(
    (montadora) => montadora.id === montadoraId
  );
  if (index !== -1) {
    montadoras.splice(index, 1);
  }
}

/**
 * Updates a montadora in the montadoras array.
 */
export function updateMontadora(montadoraObj: any): void {
  const montadoras = getAllMontadoras();
  const index = montadoras.findIndex(
    (montadora) => montadora.id === montadoraObj.id
  );

  montadoras[index] = montadoraObj;
}
