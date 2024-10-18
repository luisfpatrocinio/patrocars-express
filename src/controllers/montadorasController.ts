import { Request, Response } from "express";

export function showMontadoras(req: Request, res: Response): void {
    const montadoras = ['patro', 'xamã', 'ryan']

  // Aqui o servidor vai precisar criar uma página e me devolver como response.
  res.render("montadorasList", {
    title: "Exibindo as Montadoras",
    montadoras: montadoras
  });
}
