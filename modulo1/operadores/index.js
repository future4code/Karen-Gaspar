// Exercícios de interpretação de código

// 1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa:

// No primeiro console irá aparecer a. false
// No segundo console irá aparecer b. false
// No terceiro console irá aparecer c. true
// No quarto console irá aparecer d. boolean

// 2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.  
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

// O problema no código digitado é que a variável "soma" está como string, sendo assim a impressão no console será a concatenação do número digitado pelo usuário. 
// Exemplo: se o usuário digitar o primeiro número 1 e o segundo 2, no console será impresso "12".

// 3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números:

// A solução seria fazer a conversão das variáveis de string para número:

// let primeiroNumero = Number (prompt("Digite um numero!"));
// let segundoNumero = Number (prompt("Digite outro numero!"));
// const soma = Number(primeiroNumero + segundoNumero);
// console.log(soma);

// Exercícios de escrita:

// 1 - Faça um programa que:
// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// const idadeUser = Number (prompt ("Quantos anos você tem?"));
// const idadeAmigue = Number (prompt ("Quantos anos tem su melhor amigue?"));

// const resultado = idadeUser > idadeAmigue;
// console.log("Sua idade é maior que a de su amigue?", resultado);

// console.log(idadeUser - idadeUser);

// 2 - Faça um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// const numPar = Number (prompt ("Digite um número par"));
// console.log(numPar % 2);

// c) todos os resultados impressos dão 0.
// d) todos os resultados impressos dão 1.

// 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console:
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas

// const idadeUser = Number (prompt ("Quantos anos você tem?"));

// const meses = idadeUser * 12;
// const dias = idadeUser * 365;
// const horas = idadeUser * (365 * 60);

// console.log("Sua idade em meses, dias e horas, é:", meses, "-", dias, "-", horas);

// 4 - Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações:

// const primeiroNum = Number (prompt("Digite seu número preferido"));
// const segundoNum = Number (prompt("Digite agora o número da sua casa"));

// const maiorQueSegundo = primeiroNum > segundoNum;
// const igualSegundo = primeiroNum === segundoNum;
// const dividePeloSegundo = (primeiroNum % segundoNum) === 0;
// const dividePeloPrimeiro = (segundoNum % primeiroNum) === 0;

// console.log("O primeiro numero é maior que segundo?", maiorQueSegundo);
// console.log("O primeiro numero é igual ao segundo?", igualSegundo);
// console.log("O primeiro numero é divisível pelo segundo?", dividePeloPrimeiro);
// console.log("O segundo numero é divisível pelo segundo?", dividePeloSegundo);

// Desafio

// 1 - Tentei fazer, mas não consegui concluir

// const kelvin = (77 - 32)*(5/9) + 273.15
// console.log("77 graus Fahrenheit equivalem a", kelvin, "K")

// const celcius = 80 *(9/5) + 32
// console.log("80 graus ceslcius equivalem a", celcius, "F")

// const cParaF = 30 *(9/5) + 32
// console.log("30 graus ceslcius equivalem a", cParaF, "F")

// const cParaK = 30 + 273.15
// console.log("30 graus ceslcius equivalem a", cParaK, "K")

// Não consegui fazer os outros desafios.



