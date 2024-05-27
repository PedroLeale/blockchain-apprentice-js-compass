# Routing

Routing ou roteamento é o processo de definir como um servidor web responde a diferentes URLs solicitadas pelos clientes.

```Javascript
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/') {
        res.end('Welcome to our homepage! Please, visit /hello or /goodbye.');
    } else if (pathName === '/hello') {
        res.end('Hello, world!');
    } else if (pathName === '/goodbye') {
        res.end('Goodbye, world!');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
    
});
```

* Usando __req.url__ podemos acessar a URL solicitada pelo cliente.
* Neste caso encadeamos __if-else__ para definir qual resposta dar ao usuário de acordo com a URL.