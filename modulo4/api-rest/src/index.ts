import express, { Request, Response } from 'express'
import cors from 'cors'


enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


// Exercício 1

// a) O método para buscar a lista de usuários é o GET.
// b) Eu indicaria a entidade como "/users"

// Exercício 2

//a) 

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
  const type: string = req.query.type as string
  let result = users
  if (type.toUpperCase() !== 'NORMAL' && type.toUpperCase() !== 'ADMIN') {
    errorCode = 404
    throw new Error("Type not found")
  }
    result = result.filter((user) => user.type.includes(type.toUpperCase()))
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

// b) O melhor jeito de trazer apenas types válidos é fazendo um enum dos types.

// Exercício 3

// a) O envio de parametro usado aqui é o query.

// b) http://localhost:3003/users?name=Karen

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)

    if (!user) {
      errorCode = 404
      throw new Error("User not found")
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

// Exercício 4

// app.post("/users", (req: Request, res: Response) => {

// })

// a)
// b)

