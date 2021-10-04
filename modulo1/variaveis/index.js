// exercício de interpretação de código 1:
// let a = 10
// let b = 10
// console.log(b) //nesse comando o console vai trazer o valor de b que é 10

// b = 5
// console.log(a, b) //nesse comando o console vai trazer o valor de a, que é 10 e o valor de b, que agora é 5, pois foi substituído na linha acima.

// exercício de interpretação de código 2:
// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c) //nesse comando o console vai trazer os valores 10, 10, 10, pois foram feitas substituições após a declaração de a e b.

// exercício de interpretação de código 3:
//  let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
//  let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
//  alert(`Voce recebe ${valorRecebidoPorDia/horasTrabalhadasPorDia} por hora`)
// esse exercício faz a conta de divisão do valor trabalhado em horas no dia pelo valor recebido no dia e o alert traz o resultado dessa conta na tela.


// exercício de escrita de código 1:
//  let nomeDoUsuario
//  let idadeDoUsuario

//  console.log(typeof nomeDoUsuario, typeof idadeDoUsuario)
// aparece "undefined" no console porque não foi atribuído nenhum valor às variáveis

//  let nomeDoUsuario = prompt("Qual o seu nome?")
//  let idadeDoUsuario = prompt("Quanto anos você tem?")

// console.log(typeof nomeDoUsuario, typeof idadeDoUsuario)
// dessa vez o console retornou com o tipo das duas variáveis, que nesse caso foi 'string', pois foram declaradas como texto.

//  console.log("Seu nome é", nomeDoUsuario, "você tem", idadeDoUsuario, "anos")

// exercício de escrita de código 2:
//  const almoco = "SIM"
//  const dentes = "SIM"
//  const aula = "NAO"

//  console.log("Você já almoçou hoje?", almoco, "Você já escovou os dentes hoje?", dentes, "Você entendeu a aula de hoje?", aula)

// exercício de escrita de código 3:
// let a = 10
// let b = 25

// c = a
// a = b
// b = c

// console.log("O novo valor de a é", a)
// console.log("O novo valor de b é", b)

// desafio
 let macas = Number (prompt ("Quantas maçãs você tem?"))
 let laranjas = Number (prompt ("Quantas laranjas você tem?"))
 alert(`Voce possui ${macas+laranjas} frutas`)
 alert(`Imagina possuir ${macas*laranjas}!!!`)