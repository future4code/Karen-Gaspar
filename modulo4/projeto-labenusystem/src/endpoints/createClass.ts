import { Request, Response } from 'express'

export const createClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try{
        
        const {name} = req.body

        if(!name) {
            errorCode = 422
            throw new Error("Check if the all the required fields are filled")
        }

        const id = 'CID' + Date.now().toString()


    } catch(error: any) {
        res.status(errorCode).send({message: error.message || error.sqlMessage})
    }
}