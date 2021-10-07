// Exercício de interpretação de códigos
// 1 -  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// a) let array
//    console.log('a. ', array)
// o console imprimirá "a. undefined"

// b) array = null
//    console.log('b. ', array)
// o console imprimirá "b. null"

// c) array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//    console.log('c. ', array.length)
// o console imprimirá "c. 11"

// d) let i = 0
//    console.log('d. ', array[i])
// o console imprimirá "d. 3"

// e) array[i+1] = 19
//    console.log('e. ', array)
// o console imprimirá "e. 19"

// f) const valor = array[i+6]
//    console.log('f. ', valor)
// o console imprimirá "f. 9"

// 2 - Leia o código abaixo com atenção:

// const frase = prompt("Digite uma frase")
//  console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//Impressão: SUBI NUM ÔNIBUS EM MIRROCOS 27 

// Exercício de escrita de código:

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nomeUser = prompt("Digite seu nome!")
// const emailUser = prompt("Agora digite seu e-mail!")
// console.log(`O e-mail ${emailUser} foi cadastrado co sucesso. Seja bem-vinde, ${nomeUser}!`)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 

// const rangos = ["Strogonoff", "Pizza", "Farofa", "Lasanha", "Cuzcuz"]

//a) Imprima no console o array completo
// console.log(rangos)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: "
//seguida por cada uma das comidas, uma embaixo da outra:

// console.log("Essas são minhas comidas preferidas:")
// console.log(rangos[0])
// console.log(rangos[1])
// console.log(rangos[2])
// console.log(rangos[3])
// console.log(rangos[4])

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. 
//Imprima no console a nova lista

// const rangoUser = prompt("Qual sua comida favorita?")
// rangos.splice(1,1, rangoUser)
// console.log(rangos)

// 3 - Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// const listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// listaDeTarefas[0] = prompt("Digite a sua tarefa mais importante pra hoje")
// listaDeTarefas[1] = prompt("Digite a sua segunda tarefa mais importante pra hoje")
// listaDeTarefas[2] = prompt("Digite a sua terceira tarefa mais importante pra hoje")

// // c) Imprima o array no console
// console.log(listaDeTarefas)

// //d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
// const indiceUser = prompt ("Digite qual das tarefas já foi executada: 1,2 ou 3") -1
// console.log("Número selecionado:", indiceUser)
// const tarefaRealizada = listaDeTarefas[indiceUser -1]
// console.log("Tarefa realizada:", tarefaRealizada)

// //e) Remova da lista o item de índice que o usuário escolheu.
// listaDeTarefas.splice(indiceUser, 1)

// //f) Imprima o array no console
// console.log(listaDeTarefas)

// Desafios

// 1 - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// Não consegui elaborar!!
// const fraseUser = prompt ("Digite uma frase qualquer")
// fraseUser.from()
// console.log(fraseUser)


// 2 - Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
// faça um programa que acha o índice da palavra Abacaxi 
// e imprime tanto o índice quanto o tamanho do array

// const saladaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(saladaDeFrutas.indexOf("Abacaxi"), saladaDeFrutas.length)
