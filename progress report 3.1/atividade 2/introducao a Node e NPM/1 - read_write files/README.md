# Read and Write files

Para ler e escrever em arquivos, primeiramente devemos chamar o módulo de manipulação de arquivos.

```Javascript
const fs = require('fs');
// Chama o módulo fs (file system) para manipulação de arquivos

let textInput = fs.readFileSync('./simple_text.txt', 'utf-8');
// Lê o arquivo simple_text.txt e armazena o conteúdo em textInput

console.log(textInput);
// Exibe o conteúdo do arquivo
```

Agora podemos fazer alterações no conteúdo e depois escrever novamente.

```Javascript
let counter = textInput.match(/(\d+)/);
// Acha o contador no texto do arquivo usando uma expressão regular
if (counter) {
    counter = parseInt(counter[0]);
} else {
    counter = 0;
}
counter++;
// Incrementa o contador

textOutput = textInput.replace(/\d+/, counter.toString());
// Substitui o contador antigo pelo novo

fs.writeFileSync('./simple_text.txt', textOutput);
```

Esse código espera que o texto presente no arquivo "simple_text.txt" seja algo do tipo:<br>
"Hello World from a txt file! <br>
This file was written 2 times." <br>
E incrementa o contador a cada vez que é lido e escreve novamente.