import { connection } from '../connection'

export const selectUserById = async (id: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from('users_table')
    .where({ id });

    return result[0];
}