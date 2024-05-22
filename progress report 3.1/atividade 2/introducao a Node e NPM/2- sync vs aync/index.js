const fs = require('fs');

// De forma síncrona
const textIn = fs.readFileSync('./simple_text.txt', 'utf-8');
console.log(textIn);
const textOut = textIn.replace(/(\d+)/, (match, p1) => {
    return parseInt(p1) + 1;
    }
);
console.log('--------------');
console.log(textOut);
fs.writeFileSync('./simple_text.txt', textOut);
console.log('--------------');

// De forma assíncrona
fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Will read file...');
// Veja que a mensagem "Will read file..." é exibida antes do conteúdo do arquivo ser lido

// Podemos encadear as funções de callback para que a leitura e escrita sejam
// feitas de forma assíncrona.

fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
    console.log("Primeira");
    fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
        console.log("Segunda");
        fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
            console.log("Terceira");
            fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
                console.log(data);
            });
        });
    });
});

// Mas isso pode se tornar um problema, pois a medida que adicionamos mais
// funções de callback, o código se torna mais complexo e difícil de ler.