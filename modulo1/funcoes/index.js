// Exercícios de interpretação de código

// 1 - a) Leia o código abaixo. O que vai ser impresso no console?
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//Resposta: o console imprimirá o resultado o cálculo feito pedido na função, que no caso são 10 e 50.

//b) O que aconteceria se retirasse os dois console.log
// e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Resposta: o resultado deixaria de aparecer no console, mas isso não alteraria nada no funcionamento do código.

// 2 - a) Leia o código abaixo. Explique o que essa função faz e qual é sua utilidade:
// let textoDoUsuario = prompt("Insira um texto");
// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }
// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
//Resposta: essa função retorna o valor do parametro e a utilidade dela é além de retornar o valor, 
//alterá-lo para letras minusculas e procurar a string "cenoura" no que foi digitado pelo usuário.

// b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura - output: eu gosto de cenoura , true
// ii.  CENOURA é bom pra vista - output: cenoura é bom pra vista, true
// iii. Cenouras crescem na terra - output: cenouras crescem na terra, true

// Exercícios de escrita de código

// 1 - Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
// falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// function informarMeusDados () {
//     console.log("Eu sou a Karen, tenho 33 anos, moro em São Paulo e sou estudante")
// }
// informarMeusDados()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// function informarDados (nome, idade, cidade, profissao) {
//     const fraseDados = `Eu sou a ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}.`
//     return fraseDados
// }

// const resultadoDados = informarDados("Karen", 33, "São Paulo", "estudante")
// console.log(resultadoDados)

//2- Escreva as funções explicadas abaixo: 
//a) Escreva uma função que receba 2 números como parâmetros, e, 
//dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

// function somar (numero1,numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
// const resultado = somar(8, 25)
// console.log(resultado)


// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function informarMaiorIgual (numero1,numero2) {
//     const maiorIgual = numero1 >= numero2
//     return maiorIgual
// }
// const resultado = informarMaiorIgual(30, 30)
// console.log(resultado)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function informarSePar (numero) {
//     const par = numero % 2 === 0
//     return par
// }
// const resultado = informarSePar(8)
// console.log(resultado)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

//  const alterarTexto = function(texto) {
//  	return texto.toUpperCase()
//  }
//  const resposta = alterarTexto("Quero pudim!")
//  console.log(resposta, resposta.length)

// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário 
// sendo o argumento. Por fim, mostre no console o resultado das operações:


// const numeroUser1 = Number(prompt("Digite um número de 1 a 9"))
// const numeroUser2 = Number(prompt("Digite um número qualquer"))
// console.log("Números inseridos:", numeroUser1, numeroUser2)

//     function somar (numero1,numero2) {
//      const soma = numero1 + numero2
//      return soma 
// }
//     const resultado1 = somar(numeroUser1, numeroUser2)
//     console.log("Soma:", resultado1)

//     function subtrair (numero1, numero2) {
//         const subtrai = numero1 - numero2
//         return subtrai
//     }
//     const resultado2 = subtrair(numeroUser1, numeroUser2)
//     console.log("Subtracao:", resultado2)

//     function multiplicar (numero1, numero2) {
//         const multiplica = numero1 * numero2
//         return multiplica
//     }
//     const resultado3 = multiplicar(numeroUser1, numeroUser2)
//     console.log("Multiplicação:", resultado3)

//     function dividir (numero1, numero2) {
//         const divide = numero1 / numero2
//         return divide
//     }
//     const resultado4 = dividir(numeroUser1, numeroUser2)
//     console.log("Divisão:", resultado4)

//Desafio
// 1 - a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

// const meuNome = (nome) => {
//     console.log("Karen")
// }
// meuNome()

// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

// const outraSoma = (a, b) => {
//     console.log(a + b)
// }
// outraSoma(2,3)

// 2 - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
// Retorne este valor, invoque a função e imprima o resultado no console.

// const calcularAreaTriRetangulo = (cateto1, cateto2) => {
//     const hipotenusa = Math.hypot((cateto1 * cateto1)) + ((cateto2 * cateto2))
//     return hipotenusa
// }
// console.log(calcularAreaTriRetangulo(4,3))

// Tentei achar o jeito correto de aparecer a raiz quadrada do resultado (hipotenusa), mas não encontrei.