import { Request, Response } from "express"
import { connection } from "../data/connection"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { generateId } from "../services/IdGenerator"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = generateId()
        const cypherPassword: string = new HashManager().createHash(password) 
        
        await insertUser(
            id,
            email,
            cypherPassword
        )
        const [user] = await connection('users_table')
        .where({ email })

        const token = generateToken({id})

        res.status(200).send({"token" : "Token criado com sucesso"})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}