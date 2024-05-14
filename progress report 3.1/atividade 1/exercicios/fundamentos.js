// Exercicio 1 - FizzBuzz
// Escreva uma função que receba um número e retorne uma string.
// Para números divisíveis por 3, retorne "Fizz".
// Para números divisíveis por 5, retorne "Buzz".
// Para números divisíveis por 3 e 5, retorne "FizzBuzz".
// Para os demais números, retorne uma string vazia.

function fizzBuzz(numero) {
    let resultado = '';
    if (numero % 3 === 0) {
        resultado += 'Fizz';
    }
    if (numero % 5 === 0) {
        resultado += 'Buzz';
    }
    return resultado;
}

console.log("Exercicio 1 ------\n");

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(4)); // ""

// Exercicio 2 - Max
// Escreva uma função que receba um array de números e retorne o maior número.
// Bônus: Faça em uma linha usando recursos da linguagem.

function maxSemBonus(array) {
    let resultado = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > resultado) {
            resultado = array[i];
        }
    }
    return resultado;
}
console.log("Exercicio 2 ------\n");
console.log(maxSemBonus([1, 2, 100, 4, -500])); // 100

function maxBonus(array) {
    return array.reduce((acc, cur) => acc > cur ? acc : cur, array[0]);
}
// Aqui chamamos o método reduce do array, que recebe uma função de callback e um valor inicial e os usa pra "reduzir" o array a um elemento.
// A função de callback recebe dois parâmetros, o acumulador e o valor atual.
// O valor inicial é o primeiro elemento do array, que será o acumulador na primeira iteração. O valor inicial neste caso também pode ser -Infinity.
// A função de callback compara o acumulador com o valor atual e retorna o maior dos dois usando operador ternário.
// O valor retornado é o acumulador da próxima iteração.
// Ao final, o método reduce retorna o acumulador, que é o maior valor do array.

console.log(maxBonus([1, 2, 100, 4, -500])); // 100

// Exercicio 3 - Média e notas
// Escreva uma função que receba um array de números e retorne a média deles.
// Usando essa função de média, calcule a nota de um aluno.
// Métricas: A - 90 a 100, B - 80 a 89, C - 70 a 79, D - 60 a 69, F - 0 a 59.

function media(array) {
    return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

// Mesma ideia do exercício anterior, mas agora a função de callback soma os elementos do array.

function notaAluno(media){
    if (media >= 90) return 'A';
    if (media >= 80) return 'B';
    if (media >= 70) return 'C';
    if (media >= 60) return 'D';
    return 'F';
}

console.log("Exercicio 3 ------\n");

const notas = [100, 90, 80, 70, 60];
const mediaNotas = media(notas);
console.log(mediaNotas); // 80
console.log(notaAluno(mediaNotas)); // B

// Exercicio 4 - Palíndromo
// Escreva uma função que receba uma string e retorne se ela é um palíndromo.
// Em caso de textos, ignore espaços, maiúsculas e minúsculas.

function palindromo(str) {
    str = str.toLowerCase();
    let str_sem_espacos = str.replace(/\s/g, '');
    return str_sem_espacos === str_sem_espacos.split('').reverse().join('');
}
// split(): divide uma string em uma lista ordenada de substrings, a divisão é feita com base em um separador. Neste caso, o separador é uma string vazia, o que resulta em uma lista de caracteres.
// reverse(): inverte a ordem dos elementos de um array.
// join(): junta todos os elementos de um array em uma string, separando cada elemento com um separador. Neste caso, o separador é uma string vazia.

console.log("Exercicio 4 ------\n");

console.log(palindromo('arara')); // true
console.log(palindromo('FooBar')); // false
console.log(palindromo('socorram me subi no onibus em Marrocos')); // true


// Exercicio 5 - Ordene um array de números
// Utilize o método sort() e faça uma versão crescente e decrescente.

const numeros = [1, 5, 3, 2, 4];

const crescente = numeros.slice().sort((a, b) => a - b);
const decrescente = numeros.slice().sort((a, b) => b - a);
// É usado o método slice() para criar uma cópia do array original, pois o método sort() modifica o array original.
// O método sort() recebe uma função de callback que compara dois elementos do array e retorna um número negativo, zero ou positivo, 
// dependendo dos argumentos.

console.log("Exercicio 5 ------\n");

console.log(crescente); // [1, 2, 3, 4, 5]
console.log(decrescente); // [5, 4, 3, 2, 1]