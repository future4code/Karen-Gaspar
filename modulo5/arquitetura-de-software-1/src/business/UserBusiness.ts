import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"

export class UserBusiness{
    signup = async () =>{

    }

    login = async (email: string, password: string) =>{
        
        if(!email || !password){
            throw new Error ("Preencha todos os campos")
        }

        const userDatabase = new UserDatabase()
        const user: any = await userDatabase.selectUserByEmail(email)

        if (!user){
            throw new Error ("Usuário não encontrado ou senha incorreta!")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            throw new Error ("E-mail ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.getId(), role: user.getRole()}) 
    
        return token
    }
}