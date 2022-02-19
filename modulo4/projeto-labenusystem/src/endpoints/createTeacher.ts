import { Request, Response } from 'express'

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try{
        
        const {name, email, birth_date} = req.body

        if(!name ||  !email || !birth_date) {
            errorCode = 422
            throw new Error("Check if the all the required fields are filled")
        }

        const id = 'TID' + Date.now().toString()


    } catch(error: any) {
        res.status(errorCode).send({message: error.message || error.sqlMessage})
    }
}