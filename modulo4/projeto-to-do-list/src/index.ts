import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection'

const app: Express = express();

app.use(express.json());
app.use(cors());


// conversor de data não funciona, dá erro de "get.Date is not a function", não consegui resolver.
// const formatDate = (date: Date):string => {
//     const day = date.getDate().toString().padStart(2,'0')
//     const month = (date.getMonth() +1).toString().padStart(2,'0')
//     const year = date.getFullYear()
//     return day +'/'+ month + '/' + year
// }

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
    let errorCode: number = 400
    try {
        const id = Date.now().toString()
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Please check the fields!")
        }

        await createUser(id, name, nickname, email)
        res.status(200).send({ message: "User created!" })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
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

    let errorCode: number = 400
    try {
        const id = req.params.id;

        if (!id) {
            errorCode = 422
            throw new Error("Invalid ID")
        }

        const user = await getUserById(id)

        if (user.length === 0) {
            errorCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })

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

    let errorCode: number = 400
    try {
        const id = req.params.id
        const { name, nickname, email } = req.body

        if (!id) {
            errorCode = 422
            throw new Error("Invalid ID")
        }

        if (name === '' || nickname === '' || email === '') {
            errorCode = 422
            throw new Error("Please check the fields!")
        }

        await updateUser(id, name, nickname, email)
        res.status(200).send({ message: "User updated!", name, nickname })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })

    }
})

// Ex 4

const createTask = async (id: string, title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
    await connection.insert({
        id: id,

        title: title,
        description: description,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    }).into("Task")
}

app.post("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const id = Date.now().toString()
        let { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            errorCode = 422
            throw new Error("Please check the fields!")
        }

        limitDate = limitDate.split('/').reverse().join('/')
        await createTask(id, title, description, limitDate, creatorUserId)
        res.status(200).send({ message: "Task created!" })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// Ex 5

const getTaskById = async (id: string): Promise<any> => {
    const taskResult = await connection
        .select('Task.id as taskId', 'title', 'description', 'limit_date as limitDate',
            'status', 'creator_user_id as creatorUserId', 'User.nickname as creatorUserNickname')
        .from('Task')
        .leftJoin('User', 'Task.creator_user_id', 'User.id')
        .where('Task.id', id)
    return taskResult
}

app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const id = req.params.id

        if(!id) {
            errorCode = 422
            throw new Error("Invalid ID")
        }

        const taskResult = await getTaskById(id)

        // taskResult.limit_date = formatDate(taskResult.limit_date) 
        // conversor de data não funciona, dá erro de "get.Date is not a function", não consegui resolver.
        
        if (taskResult.length === 0) {
            errorCode = 404
            throw new Error("Task not found")
        }

        res.status(200).send({ result: taskResult })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
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