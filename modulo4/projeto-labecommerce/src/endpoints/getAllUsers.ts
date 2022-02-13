import { Request, Response } from 'express'
import { selectUserPurchases } from '../data/selectUserPurchases'
import { selectUsers } from '../data/selectUsers'

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const users = await selectUsers()

        for (let i = 0; i < users.length; i++){
            users[i].purchases = await selectUserPurchases(users[i].id) 
        }

        res.status(200).send({users: users})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}
