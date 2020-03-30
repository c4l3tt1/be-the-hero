const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)
routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.list)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)


routes.get('/profile', ProfileController.listSpecificIncidents)




// routes.get('/ongs', async (request,response) =>{

//     const ongs = await connection('ongs').select('*')
//     return response.json(ongs)
// })




// //definido essa função como assíncrona...
// routes.post("/ongs", async (request, response) => {

//     const {name, email, whatsapp, city, uf} = request.body;
//     const id = crypto.randomBytes(4).toString('HEX');


//  /*...e definindo esse insert como "await", 
//  o node vai esperar terminar de excecutar a inserção, pra daí seguir o resto do fluxo.*/
//     await connection('ongs').insert({
//         id,
//         name, 
//         email, 
//         whatsapp, 
//         city, 
//         uf,
//     })


//     return response.json({ id });


//     // //app.get("/users?name=Bruna&idade=25"
//     // const queryParams = request.query;
//     // console.log(queryParams);

//     // //app.get("/users/:id"
//     // const routeParams = request.params;
//     // console.log(routeParams);

//     // //app.post("/users"
//     // const requestBody = request.body;
//     // console.log(requestBody);


//     // //return response.send("Hello World");
//     // return response.json({
//     //     "evento": "Semana OminiStack 11.0",
//     //     "aluno": "Bruna Caletti"
//     // })
// })


module.exports = routes;






/*
    ROTAS:
    *A Rota é a URL inteira. Chamamos de "recurso" a path nomeada na criação da rota 
 
 ------------------

    MÉTODOS HTTP:

    GET - Usamos quando queremos buscar/listar uma informação do backend;
    POST - Quando quisermos criar uma informação no backend
    PUT - Alterar uma informação no backend
    DELETE - deletar uma informação no backend


-----------------------


    TIPOS DE PARAMETRO:

    Query PArams - Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) (Acessado pelo request.query)
    Rout Params - Parâmetros utilizados para identificar recursos (não nomeados) (Acessado pelo request.params)
    Request body - Corpo da rquisição. Utilizado para criar ou alterar recursos. (Acessado pelo request.body)


    Request - Guarda todos os dados que vem através da nossa requisição do usuário
    Response - responsável por retornar uma resposta pro usuário


------------------------

    TIPOS CONSULTA BANCO DE DADOS

    SQL Puro - SELECT * FROM Users WHERE name='Bruna'
    Query Builder - table('users').select('*').where('name', 'bruna') (KNEX)
 */