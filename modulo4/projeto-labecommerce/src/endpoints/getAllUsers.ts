import { Request, Response } from 'express'
import { selectUsers } from '../data/selectUsers'

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const users = await selectUsers()

        if (!users.length) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado")
        }
        
        res.status(200).send({usuários: users})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}
