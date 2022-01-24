// Exercício 1


// a) Acessamos argumentos passados aos nossos scripts através de process.argv


// b) 

const myName = process.argv[2]
const age = Number(process.argv[3])


console.log("\x1b[34m", "Olá", myName, "! Você tem", age ,"\x1b[34m","anos.")

// c)

console.log("\x1b[35m", "Olá", myName, "!", "Você tem", age ,"\x1b[35m","anos. Em sete anos você terá", age + 7,"\x1b[35m","anos") 