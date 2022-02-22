import { Request, Response } from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/Authenticator"

export const createUserLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body

        const user = await selectUserByEmail(email)

        if (user.password !== password){
            throw new Error("Senha inválida")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Preencha um e-mail válido");
        }

        const token = generateToken({id: user.id})

        res.status(200).send({message: "Login efetuado com sucesso", token})

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)  
    }
}