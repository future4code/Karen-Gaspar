import { Request, Response } from 'express'
import { connection } from '../connection'
import { selectProducts } from '../data/selectProducts'


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {

        const order= req.query.order as string
        let products

        if (!order) {
            products = await selectProducts()
        } else {
            products = await connection('labecommerce_products')
            .orderBy ("name", order)
        }

        if (!products.length) {
            errorCode = 404
            throw new Error("Nenhum produto encontrado")
        }
        
        res.status(200).send(products)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}
