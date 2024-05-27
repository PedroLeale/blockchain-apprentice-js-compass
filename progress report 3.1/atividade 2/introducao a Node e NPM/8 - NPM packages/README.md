# Node Package Manager

* NPM é o gerenciador de pacotes padrão do Node.js. Com ele podemos baixar, instalar, gerenciar e compartilhar pacotes de Javascript, os pacotes podem ser desde módulos simples até ferramentas complexas.
* Com NPM instalado, para criar um arquivo __package.json__ e utilizar suas funcionalidades, abra o terminal e digite:

```bash
npm init
```

* Siga as especificações.

## Dependências

* Podemos instalar dependências regulares como __slugify__. Que serve pra converter strings para modelos URL-friendly.

```bash
npm install slugify
```
```Javascript
const slugify = require('slugify');

let title = "Hello World!";
let slug = slugify(title);

console.log(slug); // "hello-world"
```

* Também temos dependências de desenvolvimento (dev dependencies) que não são necessárias no produto final porém ajudam o desenvolvedor.
* Um exemplo é o nodemon, que reinicia a aplicação Node sempre que mudamos algum arquivo no nosso projeto. Assim não precisamos ficar fechando o servidor manualmente sempre que mudarmos algo.

```bash
npm install nodemon --save-dev
```

* Para facilitar o uso, no campo scripts dentro do JSON podemos fazer alterações

```JSON
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js" 
  },
```

* Alguns scripts que já vem por padrão foram omitidos neste exemplo
* Colocando estas alterações, podemos apenas rodar.

```bash
npm run dev
```

* Que estaremos utilizando as dependencias de desenvolvimento.

## Observação

Caso esteja guardando seu repositório em um ambiente como GitHub, é de boa prática utilizar __.gitignore__ para não enviar a pasta node_modules.

```
node_modules/
```

Quando compartilhar com outros desenvolvedores, não compartilhe esta pasta e peça que usem:

```bash
npm install
```
para instalar dependências.