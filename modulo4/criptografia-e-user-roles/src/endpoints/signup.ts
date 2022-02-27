import { Request, Response } from "express"
import { getTokenData } from "../data/getTokenData"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { generateId } from "../services/IdGenerator"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password, role} = req.body
        const id = generateId()
        const cypherPassword: string = new HashManager().createHash(password) 
        
        if (!email || !password || !role) {
            throw new Error ("Preencha todos os campos")
        }

        await insertUser(
            id,
            email,
            cypherPassword,
            role
        )

        const token = generateToken({ id, role })

        console.log(getTokenData(token))

        res.status(200).send({message: "Token criado com sucesso", token: token})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}