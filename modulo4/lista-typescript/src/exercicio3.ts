// Exercicio 3

enum genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {nomeDoFilme: string, anoLancamento: number, generoDoFilme: genero, pontuacao? : number}

function filmeInfo(nomeDoFilme: string, anoLancamento: number, generoDoFilme: genero, pontuacao? : number):filme {
	

}