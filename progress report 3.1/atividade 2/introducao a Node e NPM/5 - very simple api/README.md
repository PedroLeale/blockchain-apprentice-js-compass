# API simples

Por enquanto, resumidamente, uma API é um serviço em que podemos requisitar funcionalidades, como dados. Neste caso vamos fazer uma API bem simples que retorna JSON quando requisitada. Utilizaremos do conteúdo de Routing visto na seção anterior:

```Javascript
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/') {
        res.end('Welcome to our homepage! Please, visit /hello /goodbye or /api.');
    } else if (pathName === '/hello') {
        res.end('Hello, world!');
    } else if (pathName === '/goodbye') {
        res.end('Goodbye, world!');
    } else if (pathName === '/api') {
        const data = {
            name: 'John Doe',
            age: 30,
            job: 'Software Developer'
        };
        // responde com um objeto JSON
        // Como alternativa, o objeto pode estar salvo localmente e ser acessado com
        // const data = fs.readFile(`${__dirname}/data.json`, 'utf-8');
        // A visualização pode ser diferente dependendo do navegador.
        res.writeHead(200, {
            'Content-type': 'application/json',
            'my-own-header': 'Hello-world'
        });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
    
});
```