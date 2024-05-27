# HTML templating

* Templates HTML são estruturas de páginas web que serão preenchidas dinâmicamente. Assim no caso de um e-commerce por exemplo, não precisaremos construir uma página HTML manualmente para cada produto.
* Neste caso iremos preencher os dados a partir de um JSON de cada item. Exemplo:
```JSON
    {
      "id": 0,
      "productName": "Fresh Avocados",
      "image": "🥑",
      "from": "Spain",
      "nutrients": "Vitamin B, Vitamin K",
      "quantity": "4 🥑",
      "price": "6.50",
      "organic": true,
      "description": "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices."
    }
```
* No template HTML, invés de colocarmos os dados diretamente, colocamos o nome do campo dentro de {%%}. Exemplo:
```HTML
    <div class="card__title-box">
      <h2 class="card__title">{%PRODUCTNAME%}</h2>
    </div>
    .
    .
    .
          <div class ="card__detail-box">
        <h6 class="card__detail card__detail-box">{%QUANTITY%} per 📦</h6>
      </div>

      <div class="card__detail-box">
        <h6 class="card__detail card__detail--price">{%PRICE%}€</h6>
      </div>
```
* Agora para a parte de Javascript, chamamos os arquivos de template.
```Javascript
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
// Estas chamadas são síncronas e acontecem só uma vez, pois não estamos chamando dentro da função de callback do servidor.
```

* Criamos nossa lógica de roteamento
```Javascript
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        
        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);

        res.end(output);
    } else if (pathName === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(tempProduct);
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world',
        });
        res.end('<h1>Page not found!</h1>');
    }
});
```

* Por fim devemos definir como os templates serão preenchidos, neste caso foi feito utilizando a função __replaceTemplate()__.

```Javascript
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%NOT_ORGANIC%}/g, product.organic ? '' : 'not-organic');
    
    return output;
}
```

## Observação

Templates construídos a partir dos assets do curso __Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)__, encontrados [neste link](https://github.com/jonasschmedtmann/complete-node-bootcamp/tree/master/1-node-farm/starter)