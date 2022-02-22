import { connection } from '../connection'

export const selectUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from('users_table')
    .where({email})

    return result[0]
}