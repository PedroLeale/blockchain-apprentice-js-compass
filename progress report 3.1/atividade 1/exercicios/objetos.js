// Exercicio 1 - Endereços e objetos
// Crie um objeto chamado endereco com as propriedades rua, numero, bairro, cidade e estado.

const endereco = {
    rua: 'Rua Teste',
    numero: 123,
    bairro: 'Bairro teste',
    cidade: 'Minas Gerais',
    estado: 'MG',
};

function mostrarEndereco(endereco) {
    for (let chave in endereco) 
        console.log(chave, endereco[chave]);
}

console.log("Exercicio 1 ------\n");

mostrarEndereco(endereco);

// Exercicio 2 - Construtor
// Crie uma função construtora de um objeto chamado Pessoa que receba nome, idade e email.
// Também faça uma factory function que faça a mesma coisa.

function Pessoa(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

console.log("Exercicio 2 ------\n");

const pessoa = new Pessoa('Fulano', 25, 'fulano@mail.com');
console.log(pessoa); // Construtor

function criarPessoa(nome, idade, email) {
    return {
        nome,
        idade,
        email,
    };
}

const pessoa2 = criarPessoa('Ciclano', 30, 'ciclano@mail.com');
console.log(pessoa2); // Factory function

// Exercicio 3 - Igualdade entre objetos
// Crie uma função que receba os objetos criados no exercicio 2 e compare se os objetos tem as mesmas propriedades e valores.

function saoIguais(obj1, obj2) {
    return Object.keys(obj1).every(chave => obj2[chave] === obj1[chave]);
}

console.log("Exercicio 3 ------\n");

console.log(saoIguais(pessoa, pessoa2)); // false

const pessoa3 = criarPessoa('Fulano', 25, 'fulano@mail.com');
console.log(saoIguais(pessoa, pessoa3)); // true

// Exercicio 4 - Postagem de blog
// Crie um objeto de postagem de blog que deve conter as propriedades titulo, mensagem, autor, visualizacoes e comentarios.
// Crie metodos para visualizar, comentar e editar a postagem.

function criarPostagem(titulo, mensagem, autor) {
    return {
        titulo,
        mensagem,
        autor,
        visualizacoes: 0,
        comentarios: [],
        visualizar() {
            this.visualizacoes++;
            return `------------\nTitulo: ${this.titulo}\nMensagem: ${this.mensagem}\nAutor: ${this.autor}
Visualizações: ${this.visualizacoes}\nComentários: ${this.comentarios}\n------------`;
        },
        comentar(comentario) {
            this.comentarios.push(comentario);
        },
        editar(titulo, mensagem) {
            if (titulo) this.titulo = titulo;
            if (mensagem) this.mensagem = mensagem;
        }
    };
}

console.log("Exercicio 4 ------\n");

const postagem = criarPostagem('Titulo Teste', 'Mensagem teste', 'Autor Teste');
console.log(postagem.visualizar());
postagem.comentar('Comentário 1');
postagem.comentar('Comentário 2');
console.log(postagem.visualizar());

postagem.editar('Novo título', 'Nova mensagem');
console.log(postagem.visualizar());
postagem.editar('Novo título 2');
console.log(postagem.visualizar());
postagem.editar(null, 'Nova mensagem 2');
console.log(postagem.visualizar());

// Exercicio 5 - Faixa de preço com tratamento de erro
// Crie um objeto de faixa de preço com as propriedades de nome, valor minimo e valor maximo.
// Faça tratamento de erro.
// Crie um método que recebe um valor e retorna true se o objeto estiver na faixa de preço.

function criarFaixaPreco(nome, minimo, maximo) {
    if (typeof nome !== 'string' || typeof minimo !== 'number' || typeof maximo !== 'number') {
        throw new Error('Os valores devem ser do tipo correto -> string, number, number');
    }
    if (minimo >= maximo) {
        throw new Error('O valor mínimo deve ser menor que o valor máximo.');
    }
    return {
        nome,
        minimo,
        maximo,
        estaNaFaixa(valor) {
            return valor >= minimo && valor <= maximo;
        }
    };
}

console.log("Exercicio 5 ------\n");

const faixa1 = criarFaixaPreco('Faixa 1', 10, 20);
console.log(faixa1.estaNaFaixa(15)); // true
console.log(faixa1.estaNaFaixa(5)); // false
console.log(faixa1.estaNaFaixa(25)); // false