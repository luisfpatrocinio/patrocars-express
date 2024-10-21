import { Request, Response } from "express";
import {
  createMontadora,
  deleteMontadoraById,
  getAllMontadoras,
  updateMontadora,
} from "../repositories/montadorasRepository";

export function showMontadoras(req: Request, res: Response): void {
  const montadoras = getAllMontadoras();

  const title =
    montadoras.length > 0
      ? "Exibindo as Montadoras"
      : "Não há montadoras criadas";

  // Aqui o servidor vai precisar criar uma página e me devolver como response.
  res.render("montadorasList", {
    title: title,
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

export function processarMontadoraDeletada(req: Request, res: Response): void {
  const id = Number(req.params.id);
  console.log("Deletando a montadora de ID: " + String(id));

  deleteMontadoraById(id);

  res.redirect("/montadoras/");
}

export function editMontadora(req: Request, res: Response): void {
  const id = Number(req.params.id);
  console.log(
    "Redirecionando para a página de edição, para editar a montadora de ID: " +
      String(id)
  );

  const montadora = getAllMontadoras().find((montadora) => montadora.id === id);
  console.log(montadora);

  res.render("montadorasEdit", {
    title: "Editar Montadora",
    montadora: montadora,
  });
}

export function processarMontadoraEditada(req: Request, res: Response): void {
  const montadoraId = Number(req.params.id);

  console.log("Editando montadora...");
  const montadoraEditada = req.body;
  montadoraEditada.id = montadoraId;
  montadoraEditada.foundationYear = Number(montadoraEditada.foundationYear);

  updateMontadora(montadoraEditada);

  res.redirect("/montadoras/");
}
