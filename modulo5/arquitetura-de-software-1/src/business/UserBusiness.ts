import { UserDatabase } from "../data/UserDatabase"
import { User, USER_ROLE } from "../model/User"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

const userDatabase = new UserDatabase()

export class UserBusiness {


    signup = async (name: string, email: string, password: string, role: USER_ROLE) => {
        
        if(!name || !email || !password || !role){
            throw new Error ("Preencha todos os campos")
        }

        if (password.length < 6){
            throw new Error ("Senha deve conter o mínimo de 6 caracteres")
        }

        if(email.indexOf("@") === -1){
            throw new Error("Email inválido");
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        
        const newUser = new User(id, name, email, hashPassword, role)
        await userDatabase.insertUser(newUser)
        
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id, role})

        return token
    }

    login = async (email: string, password: string) => {

        if (!email || !password) {
            throw new Error("Preencha todos os campos")
        }
        
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
        const token = authenticator.generateToken({ id: user.getId(), role: user.getRole() })

        return token
    }
}