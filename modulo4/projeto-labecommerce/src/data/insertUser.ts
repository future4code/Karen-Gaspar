import { connection } from "../connection";

export const insertUser = async (
    id: string,
    name: string,
    email: string,
    password: string
) => {
    await connection.insert({
        id,
        name,
        email,
        password
    }).into('labecommerce_users')
}