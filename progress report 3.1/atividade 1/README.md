# Javascript Basics for Beginners

Conceitos, fundamentos e exercícios sobre Javascript.

## Sumário

- [Variáveis](#variáveis)
- [Tipos de dados](#tipos-de-dados)
- [Objetos](#objetos)
- [Arrays](#arrays)
- [Funções](#funções)
- [Operadores](#operadores)
- [Controle de fluxo](#controle-de-fluxo)
### Variáveis

```Javascript
var name = 'Peter';
let age = 23;
const pi = 3.14159;
```

#### Nomes de variáveis

* Não podem ser palavras reservadas
* Não podem iniciar com número
* Não podem conter espaço ou hífen
* São case-sensitive, ou seja, letras maiúsculas e minúsculas fazem diferença
* Como boas práticas devem ter sentido, evitar dar nomes como a,b,c...

#### Declaração de variáveis

- __var__: Declara variável com escopo na função, se declarada fora de funções então tem escopo global.
- __let__: Declara variável com escopo no bloco, ou seja, ela estará disponível dentro do grupo de chaves, função, if-else, for-loop, mais próximo em que foi criada.
- __const__: Declara uma constante com escopo no bloco, não podem ter seus valores re-atribuídos.

### Tipos de dados

#### Tipos primitivos

* São aqueles que são copiados por valor.
* Note que em Javascript, temos apenas __number__ e não __int__ e __float__ como visto em outras linguagens.

```Javascript
let Hello = 'World!'; // String Literal
let year = 2024; // Number Literal
let isTrue = true; // Boolean Literal
let name = undefined;
let lastName = null;
``` 

#### Tipos de referência

* São tipos que são copiados por referência. 
* Incluem objetos, arrays e funções (funções em javascript são objetos).

```Javascript
// Objeto
let pessoa = {
    nome: 'Peter'
    email: 'peter@mail.com'
};

// Array
let numeros = [1, 3, 2, 5, 4];

// Função
let helloWorld = function () {
    console.log('Hello, World!');
}
```

#### Operador typeof

Usando o operador __typeof__ podemos descobrir qual é o tipo de alguma variável.

```Javascript
typeof 10; // number
typeof 'Hello, World!'; // string
```

### Objetos

Objetos podem conter tanto variáveis quanto métodos.

```Javascript
let person = {
    firstName: 'Fulano',
    lastName: 'da Silva',
    age: 35,
    greet: function() {
        console.log('Hello I am ${this.nome}');
    }
}
```

Depois de declarado, é possível acessar seu conteúdo das seguintes maneiras:

```Javascript
//Dot notation
person.firstName; // Fulano
// Bracket notation
person['lastName']; // da Silva

person.greet(); // Hello I am Fulano
```

### Arrays

* São usados para armazenar listas de itens, como variáveis ou objetos.
* São dinâmicos, ou seja, pode adicionar, remover e editar o conteúdo.
* Além disso podemos guardar tipos diferentes dentro do mesmo array.
* Tecnicamente são objetos, então possuem métodos.
* Seu índice começa a ser contado a partir do 0.

```Javascript
let selectedColors = ['red','blue'];
console.log(selectedColors[1]); // blue

selectedColors.push(5);
console.log(selectedColors); // ['red', 'blue', 5]

selectedColors[2] = 'green';
console.log(selectedColors[2]); // green
```

### Funções

São blocos de código que são executados quando são chamados.

```Javascript
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John'); // Hello John!

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

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(4)); // ""
```

### Operadores

Assim como outras linguagens, Javascript possui vários tipos de operadores para operações aritméticas, de atribuição, lógicas.

#### Aritméticos
```Javascript
let a = 1 + 2;
let b = 2 - 1;
let c = 2 * 5;
let d = 10 / 2;
let e = 10**2;
```

#### Atribuição

```Javascript
let a += 5;
let b -= 10;
let c *= 2;
```

#### Lógicos

```Javascript
// AND = &&
console.log(true && true);
console.log(false && true);

// OR = ||
console.log(true || true);
console.log(false || true);
console.log(false || false);

// NOT = !
console.log(!true);
console.log(!false);

// Operador Ternário
// condition ? value_if_true : value_if_false
// Exemplo:
let a = 10;
let b = 20;
let maior = (a > b) ? a : b
console.log(maior) // 20
```

### Controle de Fluxo

#### If-else

```Javascript
if (a > 100)
    console.log('a is greater than 100');
else
    console.log('a is not greater than 100');
```

#### Switch-case

```Javascript
let fruit = 'Apple';

switch (fruit) {
    case 'Banana':
        console.log('Banana is good for digestion.');
        break;
    case 'Apple':
        console.log('An apple a day keeps the doctor away.');
        break;
    default:
        console.log('Unknown fruit.');
        break;
}
```

#### For loop

```Javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### While loop

```Javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### Do-While loop

```Javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```