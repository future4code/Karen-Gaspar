import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public async insertUser(user: User) {
        try {
            await BaseDatabase
                .connection('labook_users')
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async selectUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase
                .connection('labook_users')
                .select('*')
                .where({ email })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
