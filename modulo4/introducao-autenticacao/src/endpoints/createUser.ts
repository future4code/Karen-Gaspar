import { Request, Response } from "express"
import { connection } from "../connection"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/Authenticator"
import { generateId } from "../services/idGenerator"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = generateId()

        const [user] = await connection('users_table')
        .where({ email })

        if (user) {
            throw new Error("E-mail já cadastrado")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Preencha um e-mail válido");
        }

        if (!password || password.length < 6) {
            throw new Error("Senha deve possuir no mínimo 6 caracteres");
        }

        await insertUser(
            id,
            email,
            password
        )

        const token = generateToken({id})

        res.status(200).send({"token": token})
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}