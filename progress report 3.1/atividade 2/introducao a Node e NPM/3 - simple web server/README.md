# Criando um servidor web bem simples

Primeiramente importamos o módulo __http__ do Node.js, que permite criar servidores web e manipular requisições e respostas HTTP.

```Javascript
const http = require('http');
```

Agora chamamos a função createServer.

```Javascript
const server = http.createServer((req, res) => {
    console.log('Requisição recebida');
    console.log(req);
    res.end('Hello, world!');
    }
);
```
Detalhes sobre essa função:
* A função callback é chamada toda vez que o servidor recebe uma requisição. Essa função recebe dois parâmetros:
  * __req__: O objeto de requisição, que contém detalhes sobre a requisição HTTP recebida.
  * __res__: O objeto de resposta, que é usado para enviar uma resposta de volta ao cliente.
* Dentro da função callback:
  * __res.end('Hello, world!');__ : Envia a resposta 'Hello, world!' para o cliente e finaliza a resposta.

Agora para iniciar o servidor, devemos:

```Javascript
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando na porta 3000');
});
```
* __server.listen(3000, '127.0.0.1')__ : Inicia o servidor na porta 3000 no enderepço IP localhost.
* O outro argumento é uma função de callback que é chamada quando o servidor começa a escutar na porta especificada.