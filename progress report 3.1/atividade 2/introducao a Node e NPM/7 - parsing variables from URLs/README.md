# Parsing de variáveis via URL

* O parsing de variáveis via URL é o processo de extrair informações da URL de uma requisição HTTP. Também pode ser chamado de query string parsing.
* Para isso primeiro chamamos o módulo:

```Javascript
const url = require('url');
```

* Agora para o parsing da URL em si

```Javascript
const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);
    .
    .
    . //Código omitido por enquanto
});
```
* __url.parse(req.url,true)__ : Retorna um objeto contendo informações sobre a URL, como *pathname* (caminho) e *query* (parâmetros da consulta)
* O parâmetro *true* faz com que a query seja um objeto.
* O pathname será usado como roteamento:

```Javascript
 if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        
        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);

        res.end(output);
    } else if (pathname === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        res.end(output);
    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world',
        });
        res.end('<h1>Page not found!</h1>');
    }
```

* Quando roteamos para __/product__ podemos acessar o JSON de produtos e buscar por uma característica específica, no caso o ID da query.
* Então usamos a Bracket notation para acessar o campo dentro do JSON.

```Javascript
const product = dataObj[query.id];
```