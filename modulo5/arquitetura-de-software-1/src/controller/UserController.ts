import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()

export class UserController{

    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password, role} = req.body

            const token = await userBusiness.signup(name, email, password, role)
    
            res.status(201).send({token: token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

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