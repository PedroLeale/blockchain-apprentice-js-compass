const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Requisição recebida');
    console.log(req);
    res.end('Hello, world!');
    }
);

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando na porta 3000');
})