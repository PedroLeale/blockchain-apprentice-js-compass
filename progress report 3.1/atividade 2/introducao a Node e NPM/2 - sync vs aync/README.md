# Sync Vs Async

A programação síncrona é a que aprendemos primeiro, onde as instruções são executadas em ordem, esperando a conclusão da anterior para iniciar a próxima:

```Javascript
const textIn = fs.readFileSync('./simple_text.txt', 'utf-8');
console.log(textIn);

const textOut = textIn.replace(/(\d+)/, (match, p1) => {
    return parseInt(p1) + 1;
    }
);

console.log(textOut);
fs.writeFileSync('./simple_text.txt', textOut);
```

Porém, nem sempre essa é a melhor opção. Para uma melhor experiência do usuário, é boa prática colocar algumas funcionalidades mais demoradas para executar em segundo plano, sem parar toda a aplicação enquanto espera.

```Javascript
// De forma assíncrona
fs.readFile('./simple_text.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Will read file...');
// Veja que a mensagem "Will read file..." é exibida antes do conteúdo do arquivo ser lido
```

Essa função assíncrona aceita uma função de callback. Podemos encadear funções de callback, se necessário, porém isso pode se tornar um problema caso o código se estenda muito.

```Javascript
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
```
