"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const usersController_1 = require("./controllers/usersController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const usersController = new usersController_1.UsersController();
routes.get('/users', usersController.listarUsuario);
routes.post('/users', usersController.criarUsuario);
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
