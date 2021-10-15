//Exercícios de interpretação de código

// 1 - O que o código está fazendo? Qual o resultado impresso no console?
// Resposta: O código está fazendo o loop em valores de 0 a 4, 
// resultando na soma do valor final + quantidade de vezes que o loop rodou. 
// O resultado no console é o último número encontrado pelo loop que é 10, pois o console.log está fora das chaves, 
// então ele não vai imprimir de um em um.

// 2 - a) O que vai ser impresso no console?
//Resposta: No console será impresso os números 19, 21, 23, 25, 27, 30.

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
// Se sim, o que poderia ser usado para fazer isso?
// Resposta: não consegui encontrar como fazer isso, então acredito que não é possível acessar os índices somente com o for of,
// só é possível percorrer os elementos.

// 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// Resposta: 4 seria então o numeroTotal, como o código pede para adicionar strings "*" no lugar de números, 
// o console vai imprimir * ** *** ****

// Exercícios de escrita de código
// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
// e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

let petUsuario = Number(prompt("Quantos pets você tem?"))
let petNomes = []

if (petUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!");

} else if (petUsuario > 0) {
    for (let i = 0; i < petUsuario; i++) {
        const pets = prompt("Qual o nome dos seus pets?")
        petNomes.push(pets)    
    }
    console.log(petNomes)
}

// 2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que imprime cada um dos valores do array original.

const arrayOriginal = [4, 5, 15, 23, 45, 50]

for (let i = 0; i < arrayOriginal.length; i++) {
    const elemento = arrayOriginal[i]
    console.log(elemento)
}

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

for (let elemento of arrayOriginal) {
    console.log(elemento / 10)
}

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e 
// imprima esse novo array

const numerosPares = []

for (let elemento of arrayOriginal) {
    if (elemento % 2 === 0) {
        numerosPares.push(elemento)
    }
}
console.log(numerosPares)

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". 
// Depois, imprima este novo array

const novaArray = []

for (let i = 0; i < arrayOriginal.length; i++) {
    novaArray.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
}
console.log(novaArray)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function buscarMaiorElemento(arrayOriginal) {
    let valorMaximo = arrayOriginal[0]

    for (let i = 1; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] > valorMaximo) {
            valorMaximo = arrayOriginal[i]
        }
    }
    return valorMaximo
}
const numerosEncontrados = buscarMaiorElemento(arrayOriginal)
console.log(numerosEncontrados)

// function buscarMaiorElemento(arrayOriginal) {
//     let valorMinimo = arrayOriginal[0]

//     for (let i = 1; i < arrayOriginal.length; i++) {
//         if (arrayOriginal[i] < valorMinimo) {
//             valorMinimo = arrayOriginal[i] 
//         }
//     }
//     return valorMinimo
// }
// const numerosEncontrados = buscarMaiorElemento(arrayOriginal)
// console.log(numerosEncontrados)

//Desafio

// 1 - Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". 
// Ele deve ser jogado entre duas pessoas. 
//Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
// A outra pessoa tem que ficar chutando até acertar em cheio o número. 
// Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, 
// indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

// ```
// Vamos jogar!
// O número chutado foi: 3
// Errrrrrrrou, é maior
// O número chutado foi: 18
// Errrrrrrrou, é menor
// O número chutado foi: 15
// Errrrrrrrou, é menor
// O número chutado foi: 11
// Acertou!!
// O número de tentativas foi: 4 

// ```

// Um resumo das funcionalidades são:

// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
// Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

let numeroDefinido = Number(prompt("Digite um número para seu adversário adivinhar!")) //O jogador 1 escolhe o número a ser adivinhado
console.log("Vamos Jogar!")

// // b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. 
// // A cada chute, deve ser informado no console:
// // - O número chutado, com a mensagem: `O número chutado foi: <número>`
// // - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: 
// // `Errou. O número escolhido é maior/menor`

let numeroApostado = Number(prompt("Digite um número:")) //O jogador 2 escolhe o número que ele acha que é o certo
console.log(`O número apostado foi ${numeroApostado}`)

//O número que foi apostado é igual ao número definido? Foi maior ou menor?
while (numeroApostado !== numeroDefinido) {
    let diferenca
    if (numeroApostado > numeroDefinido) {
        diferenca = "menor"
    } else {
        diferenca = "maior"
    }
    console.log(`Errou!!! o número é ${diferenca}!`)
    numeroApostado = Number(prompt("Digite um número:"))
}

// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, 
// deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

console.log(`Acertou!!!`)
// console.log(`O número de tentativas foi: ${}`) - não consegui achar o código que faz a contagem dos loops nem no google.

// 2 - Faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; 
// e o seu adversário será o computador. 
// A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) 
// e o usuário terá que ficar chutando o valor até acertar. 
// Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

// let numeroDefinido = Math.round(Math.random()*100) //O computador escolhe o número a ser adivinhado
// console.log("Vamos Jogar!")

// let numeroApostado = Number(prompt("Digite um número:")) //O jogador 2 escolhe o número que ele acha que é o certo
// console.log(`O número apostado foi ${numeroApostado}`)

// while (numeroApostado !== numeroDefinido) {
//     let diferenca
//     if (numeroApostado > numeroDefinido) {
//         diferenca = "menor"
//     } else {
//         diferenca = "maior"
//     }
//     console.log(`Errou!!! o número é ${diferenca}!`)
//     numeroApostado = Number(prompt("Digite um número:"))
// }
// console.log(`Acertou!!!`)
// console.log(`O número de tentativas foi: ${}`) - não consegui achar o código que faz a contagem dos loops nem no google.

//No desafio 2 eu somente alterei a forma de decisão do primeiro número, pelo computador usando o método Math.round e Math.Random, 
// não alterei nada no restante do código, 
// mas por algum motivo que não consegui descobrir ele está em loop infinito (no desafio 1 está funcionando).
// Achei difícil o desafio de um modo geral, só não achei difícil a alteração pro número ser escolhido pelo pc porque
// houve dicas no plantão pra entendermos o que precisava ser feito. Mesmo assim na hora de escrever e executar encontrei 
// bastante dificuldades