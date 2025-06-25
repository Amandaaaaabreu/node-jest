import {response, Router} from 'express'
import { usersController } from './controllers/userController.js';

const routes = Router()

routes.get('/users',usersController.listarUsuario )

routes.post('/users', usersController.criarUsuario)

export {routes}


// STATUS CODE
//200: Sucesso 
//201: Sucesos e criação de recurso
//204: Sucesso e sem conteudo
//400: Erro na requisição
//401: Não autorizado
//404: Não autorizado/ Não encontrado 
//500: Erro interno do servidor 



// metodos HTTP: 
// GET: Buscar ou listar uma informação
//POST: Criar uma informação nova
//PUT/PATCH: Atualizar uma informação existente 
//DELETE: Deletar uma informação

