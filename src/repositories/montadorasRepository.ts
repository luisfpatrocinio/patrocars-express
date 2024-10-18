const montadoras: Array<any> = [
  { name: "ryan faustino", foundationYear: 2020, country: "Brazil" },
  { name: "xamã cardoso", foundationYear: 2018, country: "Brazil" },
  {
    name: "luis felipe dos santos patrocinio",
    foundationYear: 2019,
    country: "Brazil",
  },
];

export function getAllMontadoras(): Array<any> {
  return montadoras;
}

export function createMontadora(montadoraObj: object): void {
  montadoras.push(montadoraObj);
}
