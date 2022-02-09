import { Request, Response } from 'express'
import { connection } from '../connection'
import { getAddress } from '../services/getAddress'

export const createUserAddress = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const cep = req.body.cep
        const number = req.body.number as number
        const supplement = req.body.supplement as string
        const address = await getAddress(cep)

        await connection("aula_services_address")
        .insert({
            cep,
            street: address?.street,
            number,
            supplement,
            neightborhood: address?.neightborhood,
            city: address?.city,
            state: address?.state
        })

        if (!address) {
            errorCode = 422
            throw new Error("Something went wrong. Check if 'cep' is correct.")
        }
        
        res.status(201).send({message: "Address created successfuly"})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}