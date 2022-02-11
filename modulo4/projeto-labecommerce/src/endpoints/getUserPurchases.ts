import { Request, Response } from 'express'
import { selectUserPurchases } from '../data/selectUserPurchases'


export const getUserPurchases= async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {

        const id = req.params.user_id as string
        const userPurchases = await selectUserPurchases(id)
        console.log(id)

        if(!id){
            errorCode = 422
            throw new Error('Verifique se o ID foi informado')
        }

        if(!userPurchases){
            errorCode = 404
            throw new Error('Usuário não encontrado')
        }
        
        res.status(200).send(userPurchases)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}