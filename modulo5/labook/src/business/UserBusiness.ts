import { UserDatabase } from "../data/UserDatabase"


const userDatabase = new UserDatabase()

export default class UserBusiness {
    signup = async (name: string, email: string, password: string) => {
        
        if(!name || !email || !password){
            throw new Error ("Preencha todos os campos")
        }

        
    }
}