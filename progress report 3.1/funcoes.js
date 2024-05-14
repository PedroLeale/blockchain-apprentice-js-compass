// Exercicio 1 - Hello world
// Escreva uma função que recebe um nome e retorna "Hello, [nome]!".
// Bônus: Faça a função ser uma arrow function.

function helloWorld(nome) {
    return `Hello, ${nome}!`;
}

console.log("Exercicio 1 ------\n");

console.log(helloWorld('World')); // "Hello, World!"

const helloWorldBonus = (nome) => `Hello, ${nome}!`;

console.log(helloWorldBonus('World Bonus')); // "Hello, World Bonus!"


// Exercicio 2 - Soma e operador Rest
// Escreva uma função que receba uma quantidade qualquer de números e retorne a soma deles.
// Essa quantidade qualquer deve ser passada como argumento na chamada da função da seguinte maneira:
// funcaoSoma(3, 4, 5) -> retorna 12

function funcaoSoma(...numeros) {
    return numeros.reduce((acc, cur) => acc + cur, 0);
}

console.log("Exercicio 2 ------\n");

console.log(funcaoSoma(3, 4, 5)); // 12

// Exercicio 3 - Recursão
// Escreva uma função que receba um número e retorne o fatorial dele, recursivamente.
// Bonus: Faça fibbonacci recursiva também, mas não teste este com números muito grandes.

function fatorial(numero) {
    if (numero === 0) return 1;
    return numero * fatorial(numero - 1);
}

console.log("Exercicio 3 ------\n");

console.log(fatorial(5)); // 120

function fibonacci(numero) {
    if (numero <= 1) return numero;
    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

console.log(fibonacci(10)); // 55

// Exercicio 4 - FizzBuzz com tratamento de erro
// Escreva uma função que recebe um número e retorna 'Fizz' se o número for divisível por 3, 
// 'Buzz' se o número for divisível por 5, 'FizzBuzz' se o número for divisível por 3 e 5, e o próprio número caso contrário.
// Verifique o tipo e se o numero é positivo para tratamento de erro.
// Bônus: Use arrow function.

const fizzBuzz = (numero) => {
    if (typeof numero !== 'number' || numero < 0) {
        throw new Error('O argumento deve ser um número positivo.');
    }
    let resultado = '';
    if (numero % 3 === 0) {
        resultado += 'Fizz';
    }
    if (numero % 5 === 0) {
        resultado += 'Buzz';
    }
    return resultado || numero;
}

console.log("Exercicio 4 ------\n");

try {
    console.log(fizzBuzz(3)); // "Fizz"
    console.log(fizzBuzz(5)); // "Buzz"
    console.log(fizzBuzz(15)); // "FizzBuzz"
    console.log(fizzBuzz(4)); // 4
    console.log(fizzBuzz(-1)); // Error: O argumento deve ser um número positivo.
    console.log(fizzBuzz('a')); // Error: O argumento deve ser um número positivo.
} catch (error) {
    console.log(error.message);
}

// Exercicio 5 - Desconto e valor padrão
// Escreva uma função que recebe o valor de um produto e um desconto, retornando o valor com desconto.
// O desconto padrão deve ser 5%.
// Bonus: Faça tratamento de erros para o valor do produto.

function desconto(valor, desconto = 0.05) {
    if (typeof valor !== 'number' || valor < 0) {
        throw new Error('O valor do produto deve ser um número positivo.');
    }
    return valor * (1 - desconto);
}

console.log("Exercicio 5 ------\n");

try {
    console.log(desconto(100)); // 95
    console.log(desconto(100, 0.1)); // 90
    console.log(desconto(-100)); // Error: O valor do produto deve ser um número positivo.
    console.log(desconto('a')); // Error: O valor do produto deve ser um número positivo.
}
catch (error) {
    console.log(error.message);
}
