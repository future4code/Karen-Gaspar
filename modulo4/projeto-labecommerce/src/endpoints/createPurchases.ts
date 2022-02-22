import { Request, Response } from 'express'
import { insertPurchase } from '../data/insertPurchase'
import { selectProductPrice } from '../data/selectProducts'


export const createPurchases = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const { userId, productId } = req.body
        const quantity = Number(req.body.quantity)
        const id = Date.now().toString()
        let totalPrice = 0
        const price = await selectProductPrice(productId)

        if (!userId || !productId || !quantity) {
            errorCode = 422
            throw new Error("Verifique se os campos foram preenchidos")
        }

        if (price) {
            totalPrice = price.price * quantity
        }

        await insertPurchase(
            id,
            userId,
            productId,
            quantity,
            totalPrice
        )

        res.status(201).send('Compra feita com sucesso!')

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}