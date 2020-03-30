//chamando o express numa variável
const express = require('express');
const routes = require('./routes')
const cors = require('cors')

//criando uma variável pra aplicação e associando ela ao framework do Express()
const app = express();

//chamando o CORS que determina quem vai poder acessar a nossa aplicação (módulo de segurança)
app.use(cors())


///ir no corpo da requisição e converter o JSON para um objeto javascript. Vem antes das rotas
app.use(express.json())
//definido uma rota raiz
app.use(routes);
//Utilizando o listen do Express() para definirmos a porta onde irá roda a aplicação
app.listen(3333);



