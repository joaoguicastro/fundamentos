//CommonJS ==> require

// const http = require('http');

//ModuleJS ==> import/export

import http from 'node:http';

// -HTTP
//  - Metodo HTTP
//  -URL

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
 
const users =[]

const server = http.createServer((req,res) => {
    const {method,url} = req;

    if(method === 'GET' && url === '/users'){
        return res.setHeader('Content-type','application/json').end(JSON.stringify(users));
    }
    if(method === 'POST' && url === '/users'){
        users.push({
            id:'1',
            name:'Joao Castro',
            email:'joaoguicastro100@gmail.com',
        })

        return res.writeHead(201).end();
    }
    return res.writeHead(404).end("Not Found");
})
server.listen(3333)
//localhost:3333

