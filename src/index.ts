import express from 'express';


const server = express();
server.use(express.json()); // falando pro servidor que vou trabalhar com JSON/ pra ele ler JSON



server.listen(5000, () =>{
    console.log('Servidor rodando na porta 5000')
})

