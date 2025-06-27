import { MockResponse } from './../mocks/mockResponse';
import { Request } from "express";
import { UsersController } from "./usersController";
import { makeMockResponse } from "../mocks/mockResponse";

describe('Users Controller', () =>{
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar os uusários', () =>{
        usersController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(4);
    })   

    it('Deeve criar um novo usuário', ()=>{
        mockRequest.body = {
            name: 'Novo Usuário'
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ mensagem: `Usuário Novo Usuário criado` })
    })

    it('Não deve criar usuário com nome em branco', ()=> {
        mockRequest.body = {
            name: ''
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Não é possível criar usuários sem nome' });
    })
    
})























//EXEMPLO


    // PADRAO/TRIPLO AAA
   // it('Deve somar 1 + 1', ()=> {
        //function soma (a: number, b: number){ // preparação do ambiente para rodar o teste, nesse caso com a criação de uma função soma. CENARIO DE TESTE
        //    return a +b;
       // }

       // const resultado = soma (1,2);     // ação sendo executada, nesse caso chamando a função soma //AÇÃO DO TESTE
       // expect(resultado).toBe(3) // passando o resultado para o expect, validando a minha funcionalidade, nesse caso se o resultado é 3.//RESULTADO ESPERADO
   // })