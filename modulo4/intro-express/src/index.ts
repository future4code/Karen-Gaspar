import express from "express";
import cors from "cors"
import {posts, users} from "./data"

// Exercícios 1, 2, 4, 5, 7 e 8

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})

app.get("/users", (req, res) => {  
    
    res.status(200).send(users)
})

app.get("/posts", (req, res) => {  
    
    res.status(200).send(posts)
})

app.get("/posts/:id", (req, res) => {

    const userId = Number(req.params.id)

    const userPost = posts.filter((post) =>{
        if(post.userId === userId) {
            return post
        }
    })
    res.status(200).send(userPost)
})

// Desafios 9 e 10

app.delete("/posts/:id", (req, res) => {

    const id = Number(req.params.id)

    const outPost = posts.filter((post) =>{
        if(post.id === id) {
            return {}
        }
    })
    res.status(200).send(outPost)
})

app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id)

    const outUser = users.filter((user) =>{
        if(user.id === id) {
            return {}
        }
    })
    res.status(200).send(outUser)
})


