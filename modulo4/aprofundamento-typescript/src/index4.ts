// Exercício 4

// a) 

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Eu daria o comando tsc no terminal para transpilar esse arquivo exercicio-4.ts. 

// b) Se o arquivo estiver dentro da pasta src seria preciso configurar esse caminho dentro do arquivo tsconfig.json: 
//       "outDir": "./build",        /* Redirect output structure to the directory. */
//       "rootDir": "./src",         /* Specify the root directory of input files. */

//c) O jeito de transpilar vários arquivos de uma vez é executar o comando tsc.
