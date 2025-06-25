import express from 'express';
import {routes} from './routes.js';

const server = express();
server.use(express.json()); // falando pro servidor que vou trabalhar com JSON
server.use(routes); // usando as rotas que foram criadas no arquivo routes.json


server.listen(5000, () =>{
    console.log('Servidor rodando na porta 5000')
})

