import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/Authenticator"
import { generateId } from "../services/idGenerator"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        const id = generateId()

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

        res.status(200).send({"token" : "Token criado com sucesso"})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}