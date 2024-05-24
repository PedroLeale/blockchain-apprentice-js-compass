const http = require('http');

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

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando na porta 3000');
    }
)