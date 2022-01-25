import express from "express";

import { AddressInfo } from "net";


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


//Exercício 1

// app.get("/ping", (req, res) => {          
//     res.send("pong")
// })

// Exercício 2

type Task = {userId: number, id: number, tittle: string, completed: boolean}

// Exercício 3

const tasks: Task[] = [
    {
        userId: 1,
        id: 1,
        tittle: "Resolver exercício",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        tittle: "Fazer entrega às 17h",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        tittle: "Procurar vaga de emprego",
        completed: true
    },
    {
        userId: 1,
        id: 4,
        tittle: "Preparar comida pra semana",
        completed: false
    }
]

// Exercício 4

app.get("/tasks", (req, res) => {

    const result = []

    for (let task of tasks) {
        if (task.completed === true) {
            result.push({
                userId: task.userId,
                id: task.id,
                tittle: task.tittle,
                completed: task.completed
            })
        }
    }

    res.status(200).send({result})
})

// Exercicio 5

app.post("/tasks", (req, res)=>{
    const tittle = req.body.tittle
    const completed = req.body.completed
    const userId = req.body.userId
    const id = req.body.id
            
    tasks.push({
                userId,
                id,
                tittle,
                completed,
            })
    res.status(200).send(tasks)
})


// Exercício 6
// app.put()