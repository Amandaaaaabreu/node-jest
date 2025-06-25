import {response, Router} from 'express'

const routes = Router()

const database= ['Amanda']

routes.get('/users', (request, response ) =>{
    return response.status(200).json(database);
})


routes.post('/users',(request, response) => {
    
    const {name} = request.body
    database.push(name);
    return response.status(201).json({'mensagem': `Usuário ${name} criado` })

})



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

export {routes}