import { Request, Response } from 'express'
import { selectProducts } from '../data/selectProducts'


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const products = await selectProducts()

        if (!products.length) {
            errorCode = 404
            throw new Error("Nenhum produto encontrado")
        }
        
        res.status(200).send(products)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}
