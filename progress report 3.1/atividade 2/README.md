# Node.js

Node.js é um ambiente de execução de __Javascript__ utilizando a engine V8.

## Sumário
- [Módulos](#módulos)

### Módulos

São grupos de funções encapsulados em arquivos __Javascript__ que podem ser importados para serem usados em aplicações __Node.js__.<br>
Exemplo:

```Javascript
const fs = require('fs');
// Chama o módulo fs (file system) para manipulação de arquivos

let textInput = fs.readFileSync('./simple_text.txt', 'utf-8');
// Lê o arquivo simple_text.txt e armazena o conteúdo em textInput

console.log(textInput);
// Exibe o conteúdo do arquivo
```
