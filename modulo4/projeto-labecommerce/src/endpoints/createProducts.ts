import { Request, Response } from 'express'
import { insertProduct } from '../data/insertProduct'


export const createProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const { name, price, imageUrl } = req.body
        
        if (!name || !price || !imageUrl) {
            errorCode = 422
            throw new Error("Verifique se os campos foram preenchidos")
        }

        const id = Date.now().toString()

        await insertProduct(
            id,
            name, 
            price,
            imageUrl,
        )
        
        res.status(201).send('Produto criado com sucesso!')

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}