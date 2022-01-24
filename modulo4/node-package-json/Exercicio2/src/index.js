//Exercício 2

const operacao = process.argv[2]

const number1 = Number(process.argv[3])

const number2 = Number(process.argv[4])

switch (operacao) {
    case 'soma':
        console.log("Resposta:", number1 + number2)
        break;
    case 'sub':
        console.log("Resposta:", number1 - number2)
        break;
    case 'mult':
        console.log("Resposta:", number1 * number2)
        break;
    case 'div':
        console.log("Resposta:", number1 / number2)
        break;
}