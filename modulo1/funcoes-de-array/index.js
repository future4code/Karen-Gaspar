//Exercícios de interpretação de código

//1 - Leia o código. a) O que vai ser impresso no console?
//Resposta: O console irá imprimir todos os elementos da array, pois não foi declarado nada especifico para retornar
// e no console.log está definido para imprimir todos os parametros.

//2 - Leia o código. a) O que vai ser impresso no console?
//Resposta: Será impresso uma nova array com os nomes: ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3 - Leia o código. a) O que vai ser impresso no console?
//Resposta: Será impresso uma nova array com os elementos que contenha apelidos diferentes de "Chijo":
//[{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}

//Exercícios de escrita de código
//1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomeDosPets = pets.map((pet) => {
    return pet.nome
})
console.log(nomeDosPets)

//b) Crie um novo array apenas com os cachorros salsicha

const racaSalsicha = pets.filter((pet, indice, array) => {
    return pet.raca === "Salsicha"
})
console.log(racaSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const procurarRacaPoodle = (pet) => {
    return pet.raca === "Poodle"
}
const pegarNomeDosPoodles = (pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
}
const nomeDosPoodles = pets.filter(procurarRacaPoodle).map(pegarNomeDosPoodles)
console.log(nomeDosPoodles)

//2 -Dado o seguinte array de produtos, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)Crie um novo array que contenha apenas o nome de cada item

const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log(nomeDosProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const aplicarDesconto = produtos.map((produto) => {
    const desconto = produto.preco - (produto.preco * 5 / 100)
    return { nome: produto.nome, preco: desconto.toFixed(2) }
})
console.log(aplicarDesconto)


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const procuraBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(procuraBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const procuraMarca = produtos.filter((produto, indice, array) => {
    return produto.nome.includes("Ypê")
})
console.log(procuraMarca)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const procurarYpe = (produto) => {
    return produto.nome.includes("Ypê")
}
const pegarNomeProduto = (produto) => {
    return `Compre ${produto.nome} por R$${produto.preco}`
}
const nomeDosProdutosYpe = produtos.filter(procurarYpe).map(pegarNomeProduto)
console.log(nomeDosProdutosYpe)

//Desafios
// 1 - Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const nomePokemons = pokemons.map((pokemon) => {
    return pokemon.nome
})
console.log(nomePokemons.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const tipoPokemons = pokemons.map((pokemon) =>{
    return pokemon.tipo
})
console.log(tipoPokemons)

//Não consegui encontrar a sintaxe correta para executar, tentei o indexOf(), o reduce() e o forEach(), mas não deu certo. 
//E o loop com filter nem tentei, pois tive dificulddes nas aulas de loop. Ainda preciso rever.