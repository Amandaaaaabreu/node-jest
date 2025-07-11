"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
server.use(express_1.default.json()); // falando pro servidor que vou trabalhar com JSON/ pra ele ler JSON
server.use(routes_1.routes);
server.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
