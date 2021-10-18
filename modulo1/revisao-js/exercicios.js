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
// function retornaNumerosParesElevadosADois(array) {
//     const numerosPares = array.filter((numero) => {
//         return numero % 2 === 0
//     })
//     return numerosPares
// }

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
//     const comparacao = {
//         maiorNumero: ,
//         maiorDivisivelPorMenor:,
//         diferenca: 
//         }

//     return
// }

// EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
//     let pares = array[0]
//     for (let i = 0; i < array.length; i+=2) {
//         if (array[i] > pares) {
//             pares = array[i]
//         }
//     }
//     return n
// }

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}