// Exercício 2

// a) A entrada é array e saída é um objeto

function obterEstatisticas(numeros: Array<number>){

    const numerosOrdenados: Array<number> = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([2, 5]))

// b) Essa função possui as variáveis: numeroOrdenados(tipo Array), numeros (tipo number), estatisticas(tipo Array).


// c)

type AmostraDeDados = {
    numeros : number[], 
    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        menor: number,
        media: number
    }
}

const amostraDeIdades: AmostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas
}
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))