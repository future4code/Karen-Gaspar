// Exercício 1

function userInfo (nome: string, dataDeNascimento: string) : string{

   const dataSeparada: string[] = dataDeNascimento.split("/")

   return  (`Olá, me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}.`)
}
console.log(userInfo("Karen", "08/07/1988"))


