import moment from "moment"
import { PostDatabase } from "../data/PostDatabase"
import { Post, POST_TYPES } from "../model/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

const postDatabase = new PostDatabase()

export class PostBusiness {

    post = async (photo: string, description: string, type: string, token: string) => {

        if (!photo || !description || !type) {
            throw new Error("Preencha todos os campos")
        }

        if (!token) {
            throw new Error("Token inválido ou não passado nos headers")
        }

        if (type !== POST_TYPES.NORMAL && type !== POST_TYPES.EVENT) {
            throw new Error("Escolha um 'type' entre 'NORMAL' e 'EVENT'")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const newDate = new Date().toLocaleDateString("pt-BR")
        const created_at = moment(newDate, 'DD/MM/YYYY').format('YYYY/MM/DD')

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const newPost = new Post(id, photo, description, type, created_at, tokenData.id)
        await postDatabase.insertPost(newPost)

    }

    getPostById = async (id: string) => {

        if (!id) {
            throw new Error("Id inválido ou não passado nos params")
        }

        const result = await postDatabase.selectPostById(id)

        if (!result) {
            throw new Error("Id inválido ou Post não encontrado")
        }

        return result
    }
}