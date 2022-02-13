import { Request, Response } from 'express'
import { connection } from '../connection'
import { selectProducts } from '../data/selectProducts'


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {

        const order= req.query.order as string
        const search = req.query.search as string
        let products

        if (!order && !search ) {
            products = await selectProducts()
        } else if (!search) {
            products = await connection('labecommerce_products')
            .orderBy ("name", order)
        } else if (search) {
            products = await connection('labecommerce_products')
            .where('name', 'LIKE', `%${search}%`)
        }

        if (!products.length) {
            errorCode = 404
            throw new Error("Nenhum produto encontrado")
        }
        
        res.status(200).send({produtos: products})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}
