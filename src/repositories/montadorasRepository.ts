const montadoras: Array<any> = [
  { name: "Fiat", foundationYear: 1899, country: "Itália" },
  { name: "Hyundai", foundationYear: 1967, country: "Coréia do Sul" },
  { name: "BMW", foundationYear: 1916, country: "Alemanha" },
];

export function getAllMontadoras(): Array<any> {
  return montadoras;
}

export function createMontadora(montadoraObj: object): void {
  montadoras.push(montadoraObj);
}
