import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async insertUser(user: User){
        try {
            await BaseDatabase
            .connection('User_Arq')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async selectUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase
            .connection('User_Arq')
            .select('*')
            .where({email})
            return User.toUserModel(user[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)

        }
    }
}