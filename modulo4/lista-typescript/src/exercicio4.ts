// Exercício 4


enum setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type colaboradores = { nome: string, salário: number, setor: setor, presencial: boolean }


const colaboradoresInfo = 
[
	{ nome: "Marcos", salário: 2500, setor: setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setor.MARKETING, presencial: true }
]

function colaboradoresPorSetor(colaboradoresInfo:colaboradores[]):colaboradores[] {
    return colaboradoresInfo.filter((colaborador)=>{
        return colaborador.setor === setor.MARKETING && colaborador.presencial === true
    })
}
console.log(colaboradoresPorSetor(colaboradoresInfo))