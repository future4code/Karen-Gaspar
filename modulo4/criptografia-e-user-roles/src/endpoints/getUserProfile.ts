import { Request, Response } from "express"
import { getTokenData } from "../data/getTokenData"
import { selectUserById } from "../data/selectUserById"

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = getTokenData(token)

        if(!authenticationData){
            throw new Error("Token inválido ou não passado nos headers")
        }

        if(authenticationData.role !== "ADMIN"){
            throw new Error("Usuário não permitido")
        }

        const user = await selectUserById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
        })

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}