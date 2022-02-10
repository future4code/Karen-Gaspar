import { connection } from "../connection";

export const selectUsers = async ():Promise<any> => {
    const result = await connection("labecommerce_users")
       .select('*')
    return result
} 