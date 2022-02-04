import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection'

const app: Express = express();

app.use(express.json());
app.use(cors());


//Ex 1

const createUser = async (id: string, name: string, nickname: string, email: string): Promise<void> => {
    await connection.insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
    }).into("User")
}

app.post("/user", async (req: Request, res: Response) => {

    try {
        const id = Date.now().toString()
        const { name, nickname, email } = req.body
        await createUser(id, name, nickname, email)
        console.log(id)
        res.status(200).send({ message: "User created!" })
    } catch (error: any) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
})


//Ex 2

const getUserById = async (id: string): Promise<any> => {
    const result = await connection("User")
        .select('name', 'nickname')
        .where("id", id);
    return result
}

app.get("/user/:id", async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        const user = await getUserById(id)
        res.status(200).send(user)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})


//Ex 3

const updateUser = async (id: string, name?: string, nickname?: string, email?: string): Promise<any> => {
    await connection("User")
        .update({
            name: name,
            nickname: nickname,
            email: email
        })
        .where("id", id);
}

app.put("/user/edit/:id", async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const { name, nickname, email } = req.body
        await updateUser(id, name, nickname, email)
        res.status(200).send({ message: "User updated!", name, nickname })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})

// Ex 4

const createTask = async (taskId: string, title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
    await connection.insert({
        taskId: taskId,
        title: title,
        description: description,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    }).into("Task")
}

app.post("/task", async (req: Request, res: Response) => {
    try {
        const taskId = Date.now().toString()
        let { title, description, limitDate, creatorUserId } = req.body
        limitDate = limitDate.split('/').reverse().join('/')
        await createTask(taskId, title, description, limitDate, creatorUserId)
        res.status(200).send({ message: "Task created!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})






























// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})