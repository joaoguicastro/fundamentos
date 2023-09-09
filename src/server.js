//CommonJS ==> require

// const http = require('http');

//ModuleJS ==> import/export

// -HTTP
//  - Metodo HTTP
//  -URL

// UUID => Unique Universal ID

// GET, POST, PUT , PATCH , DELETE

// GET => Buscar uma recurso do back-end
// GET /users => Buscando usuarios no back-end

// POST => Criar uma recurso
// POST /users => Criar um usuarios no back-end

// PUT => Atualizar ou editar um recurso no back-end
// PATCH => Atualizar uma informaçao unica ou especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

//Stateful - Stateless
//Stateful => Ela sempre vai ter algum tipo de informaçao sendo guardada na memoria
//Stateless => Nao salva nada em memoria, normalmente salva em banco de dados ou arquivos de texto

//JSON - Javascript Object Notation

//Cabecalhos (Requisiçao/Resposta) => Metadados

// HTTP Status Code

// Query Parameters: URL Stateful => Filtros, paginaçaom, nao-obrigatorios
// Route Parameters: idetifiacaçao de recursos
// Request Body: Envio de informaçoes de um formulario (HTTP)

// http://localhost:3333/users?userId=1&name=Diego
// GET http://localhost:3333/users/1


import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';


const server = http.createServer(async (req,res) => {
    const {method,url} = req;

    await json(req,res)

    const route = routes.find(route =>{
        return route.method === method && route.path === url;
    })

    if (route){
        return route.handler(req,res);
    }

    return res.writeHead(404).end("Not Found");
})
server.listen(3333)
//localhost:3333

