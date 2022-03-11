import { UserDatabase } from "../data/UserDatabase"
import User from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    signup = async (name: string, email: string, password: string) => {

        if (!name || !email || !password) {
            throw new Error("Preencha todos os campos")
        }

        const userDatabase = new UserDatabase()

        const user = await userDatabase.selectUserByEmail(email)

        if (user) {
            throw new Error("Email já cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDatabase.insertUser(newUser)

        console.log(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id })

        return token
    }
}