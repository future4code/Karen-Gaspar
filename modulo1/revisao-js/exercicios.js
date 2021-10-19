// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort(function (a, b) {
        return a - b
    })
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((numero) => {
        return numero % 2 === 0
    })
    return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numPares = array.filter((num) => {
        return num % 2 === 0
    })
    const numerosElevados = numPares.map((elevados) => {
        return elevados * elevados
    })
    return numerosElevados
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {

//     let numero = {
//         maiorNumero: maior,
//         maiorDivisivelPorMenor: maior % menor === 0,
//         diferenca: maior - menor
//     }
//     return numero
// }
// retornaObjetoEntreDoisNumeros()

// // EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
//     let pares = [0] 
//     for (let i = 0; i < n; i += 2) {
//         return pares
//         }
//     }
//     retornaNPrimeirosPares(3)

// // EXERCÍCIO 09
// function classificaTriangulo(ladoA, ladoB, ladoC) {

//     if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
//         return "Equilátero"
//     } else if (ladoA === ladoB && ladoB !== ladoC && ladoA !== ladoC) {
//         return "Isósceles"
//     } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
//         return "Escaleno"
//     } else {

//     }
//     return classificaTriangulo()
// }

// // EXERCÍCIO 10
// function retornaSegundoMaiorESegundoMenor(array) {
//     const arrayOrdenado = array.sort(function (a, b) {
//         const segundoMaiorValor = arrayOrdenado[arrayOrdenado.lenght - 2]
//         const segundoMenorValor = arrayOrdenado[1]
//         arrayFinal = [segundoMaiorValor, segundoMenorValor]
//     })
//     return arrayFinal
// }


// // EXERCÍCIO 11
// function retornaChamadaDeFilme(filme) {
//     const filme = {
//         nome: "",
//         ano: Number,
//         diretor: "",
//         atores: [],
//     }
//     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e 
//     estrelado por ${filme.atores}.`
// }
// retornaChamadaDeFilme()

// // EXERCÍCIO 12
// function retornaPessoaAnonimizada(pessoa) {
//     const pessoa = {
//         nome:"",
//         idade:,
//         endereco: "",
//         email: "",
//     }
//     const novaPessoa = {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
//     return novaPessoa
// }

// // EXERCÍCIO 13A
// function retornaPessoasAutorizadas(pessoas) {

// }

// // EXERCÍCIO 13B
// function retornaPessoasNaoAutorizadas(pessoas) {

// }

// // EXERCÍCIO 14
// function retornaContasComSaldoAtualizado(contas) {

// }

// // EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    })
    return consultas
}

// // EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
//     const dataOrdenada = consultas.sort(function (a,b) {
//         return b.dataDaConsulta - a.dataDaConsulta
//     })
//     return dataOrdenada
// }
