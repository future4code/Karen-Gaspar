import express from "express";
import cors from "cors"
import {posts, users} from "./data"


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

// app.get("/posts/1", (req, res) => {

// })
