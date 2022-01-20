// Exercício 1

//a) A variável, quando tipada como string, recebe apenas esse tipo de declaração, 
//portanto se colocarmos qualquer outro tipo ela vai apresentar um erro como no exemplo abaixo:

// const minhaString : string = 3

//o correto aqui é declarar como string:

const minhaString: string = "Qualquer coisa que seja string"

//b) Para que uma variável aceite mais de um tipo de valor podemos declara um type com os dois tipos que podem ser usados,
// como no exemplo abaixo:

type numOrStr = number | string

const meuNumero: numOrStr = 10

//c)

type pessoa = {nome: string, idade: number, corFavorita: string}

enum coresArcoIris {
    VERMELHO ="vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ROXO = "roxo",
    ROSA = "rosa"
}

const pessoa1 : pessoa = {
    nome: "Karen",
    idade: 33,
    corFavorita: coresArcoIris.AZUL
}

const pessoa2 : pessoa = {
    nome: "Elizabete",
    idade: 61,
    corFavorita: coresArcoIris.AMARELO
}
const pessoa3 : pessoa = {
    nome: "Renan",
    idade: 30,
    corFavorita: coresArcoIris.VERMELHO
}

