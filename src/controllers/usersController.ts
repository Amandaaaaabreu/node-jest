import { Request, Response } from 'express';
import { database } from '../database';

export class UsersController {
  criarUsuario = async (request: Request, response: Response): Promise<void> => {
    const { name } = request.body;

    if (!name || name.length < 1) {
      response.status(403).json({ mensagem: 'Não é possível criar usuários sem nome' });
      return;
    }

    database.push(name);
    response.status(201).json({ mensagem: `Usuário ${name} criado` });
  };

  listarUsuario = async (request: Request, response: Response): Promise<void> => {
    response.status(200).json(database);
  };
}
