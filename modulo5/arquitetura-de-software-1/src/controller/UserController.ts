import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()

export class UserController{
    login = async (req: Request, res: Response): Promise<void> =>{
        try {
            const {email, password} = req.body

            const token = await userBusiness.login(email, password)
    
            res.status(201).send({token: token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}