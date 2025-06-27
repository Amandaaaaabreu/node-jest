"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = require("../database");
class UsersController {
    constructor() {
        this.criarUsuario = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            if (!name || name.length < 1) {
                response.status(403).json({ mensagem: 'Não é possível criar usuários sem nome' });
                return;
            }
            database_1.database.push(name);
            response.status(201).json({ mensagem: `Usuário ${name} criado` });
        });
        this.listarUsuario = (request, response) => __awaiter(this, void 0, void 0, function* () {
            response.status(200).json(database_1.database);
        });
    }
}
exports.UsersController = UsersController;
