import { PostBusiness } from "../business/PostBusiness"
import { Request, Response } from "express"

const postBusiness = new PostBusiness()

export class PostController {
    post = async (req: Request, res: Response) => {

        const { photo, description, type } = req.body
        const token = req.headers.authorization as string

        try {
            const post = await postBusiness.post(photo, description, type, token)

            res.status(201).send({ message: "Post criado com sucesso" })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }

    getPostById = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const postById = await postBusiness.getPostById(id)

            res.status(201).send({ post: postById })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }

}