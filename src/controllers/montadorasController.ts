import { Request, Response } from "express";
import {
  createMontadora,
  getAllMontadoras,
} from "../repositories/montadorasRepository";

export function showMontadoras(req: Request, res: Response): void {
  // TODO: Obter montadoras a partir do repository.
  const montadoras = getAllMontadoras();

  // Aqui o servidor vai precisar criar uma página e me devolver como response.
  res.render("montadorasList", {
    title: "Exibindo as Montadoras",
    montadoras: montadoras,
  });
}

export function criarMontadoras(req: Request, res: Response): void {
  res.render("montadorasCreate", {
    title: "Criar Montadora",
  });
}

export function processarMontadoraCriada(req: Request, res: Response): void {
  const montadoraCriada = req.body;
  console.log(montadoraCriada);

  // Adicionar montadora criada no repository.
  createMontadora(montadoraCriada);

  res.redirect("/montadoras/");
}
