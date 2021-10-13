// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retangulo"))
  const largura = Number(prompt("Digite a largura do retangulo"))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano atual"))
  anoNascimento = Number(prompt("Digite o ano de seu nascimento"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculo1 = (altura * altura)
  const calculo2 = peso / calculo1
  return calculo2
}
const imc = calculo2

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite o seu nome")
  idade = prompt("Digite dua idade")
  email = prompt("Digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const numeroInicial = array[0]
  const numeroFinal = array[array.length -1]
  array[array.length - 1] = numeroInicial
  array[0] = numeroFinal
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
anoCorrente = prompt ("Digite o ano atual")
anoDeNascim = prompt ("Digite o ano de seu nascimento")
anoRg = prompt ("Digite o ano de emissão do seu RG")

const resultado1 = anoCorrente - anoDeNascim <= 20 && anoCorrente - anoRg >= 5
const resultado2 = anoCorrente - anoDeNascim > 20 <= 50 && anoCorrente - anoRg >= 10
const resultado3 = anoCorrente - anoDeNascim > 50 && anoCorrente - anoRg >= 15

console.log(resultado1 || resultado2 || resultado3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
anoBisex = ano % 400 === 0 && ano % 4 === 0 && ano % 100 !== 0

return (anoBisex)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
idade = prompt("Você tem mais de 18 anos? Responda com sim ou não")
escolaridade = prompt("Você possui Ensino Médio Completo? Responda com sim ou não")
disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda com sim ou não")
 
maiorIdade = idade === "sim"
ensinoMedio = escolaridade === "sim"
horarioLivre = disponibilidade === "sim"

console.log(maiorIdade && ensinoMedio && horarioLivre)
}