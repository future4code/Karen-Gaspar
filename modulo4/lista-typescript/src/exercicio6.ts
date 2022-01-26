// Exercicio 6


type clientes = {cliente: string, saldoTotal: number, debitos: number[]}

const clientesInfo = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function possiveisClientes(clientesInfo: clientes[]):clientes[]{
	return clientesInfo.map((cliente)=>{
		const acumulador = cliente.debitos.reduce((acumulador, numero) => acumulador + numero, 0)
		cliente.saldoTotal -= acumulador
		return cliente
	}).filter((cliente)=>{
		cliente.debitos = []
		return cliente.saldoTotal < 0
	})
}
console.log(possiveisClientes(clientesInfo))