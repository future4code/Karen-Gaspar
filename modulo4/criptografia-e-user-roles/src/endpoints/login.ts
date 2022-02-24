import { Request, Response } from "express"
import { connection } from "../data/connection"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export const createUserLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body

        const user = await selectUserByEmail(email)

        const passwordIsCorrect: boolean = user && new HashManager().compareHash(password, user.password)
        
        if (!user || !passwordIsCorrect){
            throw new Error("Credenciais inválidas")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Preencha um e-mail válido");
        }

        const token = generateToken({id: user.id, role: user.role})

        console.log(token)

        res.status(200).send({message: "Login efetuado com sucesso"})

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)  
    }
} 