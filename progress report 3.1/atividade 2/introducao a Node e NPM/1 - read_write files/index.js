const fs = require('fs');
// Chama o módulo fs (file system) para manipulação de arquivos

console.log('Antes de ler o arquivo:');
let textInput = fs.readFileSync('./simple_text.txt', 'utf-8');
// Lê o arquivo simple_text.txt e armazena o conteúdo em textInput

console.log(textInput);
// Exibe o conteúdo do arquivo

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
// Escreve o conteúdo de textInput no arquivo simple_text.txt

console.log('----------------');
console.log('Depois de escrever no arquivo:');
console.log(textOutput);