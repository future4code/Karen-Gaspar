// Exercícios de interpretação de código

//1- Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?
// Resposta: 
// Matheus Nachtergaele,
// Virginia Cavendish,
// {canal: "Globo", horario: "14h"} 

//2 - Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) O que vai ser impresso no console?
//Resposta:
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Resposta: a sintaxe dos três pontos copia o objeto para que as mesmas chaves e valores em outro objeto, 
// podendo esses serem editados e terem novos incluídos.

// 3 - Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
// Resposta: 
// false
// undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta:
// Será impresso na primeira linha false porque o console pede impressão de objeto com a propriedade "backender" e o valor dela é false.
// Será impresso na segunda linha undefined porque a propriedade de "altura" não foi descrita no objeto, então ela não existe.

// Exercícios de escrita de códigos

// 1 - Resolva os passos a seguir: 
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
// apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const aluna = {
        nome: "Karen", 
        apelidos: ["Karinha", "Kaka", "Ka"],
        
        saudacao: () => {
        return `Eu sou ${aluna.nome}, mas pode me chamar de: ${aluna.apelidos}`
    }
        
}

console.log(aluna.saudacao())

//b) b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
// mas com uma nova lista de três apelidos. 
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaAluna = {
        ...aluna,
        apelidos: ["Karente", "Kari", "Gasparzinha"],

        saudacao: () => {
        return `Eu sou ${novaAluna.nome}, mas pode me chamar de: ${novaAluna.apelidos}`
    }
}        
console.log(novaAluna.saudacao())

// 2- Resolva os passos a seguir: 

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const cliente1 = {
    nome: "Ricardo",
    idade: 25,
    profissao:"Designer"
}

const cliente2 = {
    nome: "Renan",
    idade: 30,
    profissao: "Fotógrafo"

}

// b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

const recebeCliente1 = () => {
    const cliente = [cliente1.nome, cliente1.nome.length, cliente1.idade, cliente1.profissao, cliente1.profissao.length]
    return cliente
}

console.log(recebeCliente1())

const recebeCliente2 = () => {
    const cliente = [cliente2.nome, cliente2.nome.length, cliente2.idade, cliente2.profissao, cliente2.profissao.length]
    return cliente
}

console.log(recebeCliente2())


// 3 - Resolva os passos a seguir: 
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = [] 

// b) Crie três novos objetos que representem frutas de um sacolão. 
// Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Mamão", 
    disponibilidade: true
};
    
const fruta3 = {
    nome: "Figo", 
    disponibilidade: true
};


//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
// Invoque essa função passando os três objetos criados.

function adicionaCarrinho(fruta1, fruta2, fruta3) {
    carrinho.push(fruta1, fruta2, fruta3)
    return carrinho
}
console.log(adicionaCarrinho(fruta1, fruta2, fruta3))

//Desafios 
// 1- Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto 
// com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

const cadastraUsuario = () => {
    const usuario = {
        nome: prompt("Qual o seu nome?"),
        idade: prompt("Qual a sua idade?"),
        profissao: prompt("Qual a sua profissão?"),
    };
    return usuario
}
    console.log(cadastraUsuario())
    console.log(typeof cadastraUsuario())
