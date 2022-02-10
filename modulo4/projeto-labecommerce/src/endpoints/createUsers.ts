import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser'

export const createUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const { name, email, password } = req.body
        
        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Verifique se os campos foram preenchidos")
        }

        const id = Date.now().toString()

        await insertUser(
            id,
            name, 
            email,
            password
        )
        
        res.status(201).send('Usuário criado com sucesso!')

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}