import express, { Request, Response } from "express";

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

type Task = { userId: number, id: number, tittle: string, completed: boolean }

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
    },
    {
        userId: 2,
        id: 5,
        tittle: "Enviar e-mail para a empresa",
        completed: false
    }
]

// Exercício 4

app.get("/tasks", (req: Request, res: Response) => {

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

    res.status(200).send({ result })
})

// Exercicio 5

app.post("/tasks", (req: Request, res: Response) => {
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

app.put("/tasks/:id", (req: Request, res: Response)=>{
    const taskId = Number(req.params.id)

    if (!taskId) {
        res.status(400).send("Faltou o params")
    }

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            tasks[i].completed = !tasks[i].completed
        }
    }
    res.status(200).send(tasks)
})

// Exercício 7

app.delete("/tasks", (req: Request, res: Response)=>{
    const id = Number(req.query.id)
    
    if (!id) {
        res.status(400).send("Faltou o query")
    }

    const newArray: Task[] = []

    tasks.forEach((task)=>{
        if (task.id !== id){
            newArray.push(task)
        }
    })
    res.status(200).send(newArray)
})

//Exercício 8

app.get("/tasks/:userId", (req: Request, res: Response)=>{
    const userId = Number(req.params.userId)

    if (!userId) {
        res.status(400).send("Faltou o params")
    }

    const result = []

    for (let task of tasks){
        if (task.userId === userId){
            result.push({
                userId: task.userId,
                id: task.id,
                tittle: task.tittle,
                completed: task.completed
            })
        }
    }
    res.status(200).send({ result })
})

//Exercício 9

// https://documenter.getpostman.com/view/18385963/UVe9SpjD 