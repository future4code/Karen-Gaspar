import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

const userDatabase = new UserDatabase()

export class UserBusiness {

    signup = async (name: string, email: string, password: string) => {

        if (!name || !email || !password) {
            throw new Error("Preencha todos os campos")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const user = await userDatabase.selectUserByEmail(email)

        if (user) {
            throw new Error("Email já cadastrado")
        }

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDatabase.insertUser(newUser)
        console.log(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id })

        return token
    }

    login = async (email: string, password: string) => {

        if (!email || !password) {
            throw new Error("Preencha todos os campos")
        }

        const userDatabase = new UserDatabase()
        const user: any = await userDatabase.selectUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta!")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("E-mail ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.getId() })

        return token
    }
}