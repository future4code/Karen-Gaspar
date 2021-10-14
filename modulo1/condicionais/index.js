// Exercícios de interpretação de código

// 1 - Leia o código abaixo
// a) Explique o que o código faz. Qual o teste que ele realiza?
// Resposta: o código verifica se o número digitado pelo usuário é um número divisível. Ele testa as condicionais.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Resposta: ele imprime que passou no teste" os números que são divisíveis.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Resposta: ele imprime que passou no teste" os números que NÃO são divisíveis. 

// 2 - O código abaixo foi feito por uma pessoa desenvolvedora, 
// contratada para automatizar algumas tarefas de um supermercado

// a) Para que serve o código?
// Resposta: o código serve para simplificar a comparação das variáveis quando essas são iguais. 
// No caso desse código ele compara frutas.
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// Resposta: Se o usuário digitar Maçã igual está no código a mensagem será: "O preço da fruta Maçã é R$2,25"
// c) Considere que um usuário queira comprar uma Pêra, 
// qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default?
// Resposta: a mensagem impressa seria "O preço da fruta Pêra é R$5,50" e "O preço da fruta Pêra é R$5", respectivamente,
// porque o console não terá o break para barrar a leitura do código de Pêra, então ele vai ler e imprimir os dois preços.

// 3- Leia o código abaixo:
// a) O que a primeira linha está fazendo?
// Resposta: A primeira linha está pedindo ao usuário um número que será a declaração da variável.
// b)Considere que um usuário digitou o número 10. Qual será a mensagem do terminal? E se o número fosse -10?
// Resposta: A mensagem caso ele digite 10 será "Esse número passou no teste". Se for -10 não aparecerá nada no console.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, haverá erro na impressão do segundo console, pois ele está fora das chaves {} 
// e isso faz com que ele não tenha acesso ao valor da variável "mensagem".

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idadeUsuario = Number(prompt("Digite sua idade"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// 2- Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoAluno = prompt("Digite o turno que você estuda: M(matutino), V(vespertina) ou N(noturno)").toUpperCase()

if (turnoAluno === "M") {
    console.log("Bom dia!")
} else if (turnoAluno === "V") {
    console.log("Boa tarde!")
} else if (turnoAluno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Digite uma opção válida")
}


// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoDoAluno = prompt("Digite o turno que você estuda: M(matutino), V(vespertina) ou N(noturno)").toUpperCase()

switch (turnoDoAluno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
// se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

const generoFilme = prompt("Digite o gênero do filme que você quer ver.").toLowerCase()
const precoDoIngresso = Number(prompt("Digite o valor que pretende pagar no ingresso (em número)"))

if (generoFilme === "fantasia" && precoDoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// Desafios

// 1 - Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e 
// imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
// trocando [LANCHINHO] pelo que o usuário colocou no input.

const filmeUsuario = prompt("Digite o gênero do filme que você quer ver.").toLowerCase()
const precoIngresso = Number(prompt("Digite o valor que pretende pagar no ingresso"))
const lancheUsuario = prompt("Qual lanche você irá comprar?")

if (filmeUsuario === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
    console.log("Aproveite seu", lancheUsuario)
} else {
    console.log("Escolha outro filme :(")
}

// 2 - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
// Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do prompt . 
// Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o 
// valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 


const nomeUsuario = prompt("Digite seu nome completo")
const tipoJogo = prompt("Qual o tipo do jogo você vai assistir? Responda com IN/DO").toUpperCase()
const etapaJogo = prompt("Qual etapa do jogo você vai assistir? Responda com SF/DT/FI").toUpperCase()
const categoriaJogo = Number(prompt("Em qual categoria você quer assistir o jogo? Escolha entre 1,2,3 ou 4"))
const quantidadeIngresso = Number(prompt("Quantos ingressos você deseja comprar?"))


let valorDoIngresso

const imprimeRecibo = () => {
    if (tipoJogo === "DO") {
        if (etapaJogo === "SF") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 1320
            } else if (categoria === 2) {
                valorDoIngresso = 880
            } else if (categoria === 3) {
                valorDoIngresso = 550
            } else if (categoria === 4) {
                valorDoIngresso = 220
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else if (etapaJogo === "DT") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 660
            } else if (categoria === 2) {
                valorDoIngresso = 440
            } else if (categoria === 3) {
                valorDoIngresso = 330
            } else if (categoria === 4) {
                valorDoIngresso = 170
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else if (etapaJogo === "FI") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 1980
            } else if (categoria === 2) {
                valorDoIngresso = 1320
            } else if (categoria === 3) {
                valorDoIngresso = 880
            } else if (categoria === 4) {
                valorDoIngresso = 330
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else {
            console.log("Etapa não encontrada. Digite etapa DT, SF ou FI")
        }
    } else if (tipoJogo === "IN") {
        if (etapaJogo === "SF") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 1320 * 4,10
            } else if (categoria === 2) {
                valorDoIngresso = 880 * 4,10
            } else if (categoria === 3) {
                valorDoIngresso = 550 * 4,10
            } else if (categoria === 4) {
                valorDoIngresso = 220 * 4,10
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else if (etapaJogo === "DT") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 660 * 4,10
            } else if (categoria === 2) {
                valorDoIngresso = 440 * 4,10
            } else if (categoria === 3) {
                valorDoIngresso = 330 * 4,10
            } else if (categoria === 4) {
                valorDoIngresso = 170 * 4,10
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else if (etapaJogo === "FI") {
            if (categoriaJogo === 1) {
                valorDoIngresso = 1980 * 4,10
            } else if (categoria === 2) {
                valorDoIngresso = 1320 * 4,10
            } else if (categoria === 3) {
                valorDoIngresso = 880 * 4,10
            } else if (categoria === 4) {
                valorDoIngresso = 330 * 4,10
            } else {
                console.log("Escolha uma categoria de 1 a 4")
            }

        } else {
            console.log("Etapa não encontrada. Digite etapa DT, SF ou FI")
        }

    } else {
        console.log("Tipo de jogo não reconhecido. Digite DO para jogos domésticos e IN para jogos internacionais")
    }

    let valorTotal = valorDoIngresso * quantidadeIngresso

    console.log("---Dados da compra---")
    console.log(`Nome do cliente: ${nomeUsuario}`)
    console.log(`Tipo de jogo: ${tipoJogo}`)
    console.log(`Etapa do jogo: ${etapaJogo}`)
    console.log(`Categoria: ${categoriaJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeIngresso}`)
    console.log("---Valores--- ")
    console.log(`Valor do ingresso: ${valorDoIngresso}`)
    console.log(`Valor total: ${valorTotal}`)

}


