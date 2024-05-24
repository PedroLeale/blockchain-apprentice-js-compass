const http = require('http');
// Chamando o módulo http para criar um servidor

const server = http.createServer((req, res) => {
    console.log('Requisição recebida');
    console.log(req);
    res.end('Hello, world!');
    }
);
// Criando um servidor que responde com 'Hello, world!' a qualquer requisição


server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando na porta 3000');
})
// Iniciando o servidor na porta 3000