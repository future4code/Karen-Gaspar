import { connection } from "../connection";

export const selectUserPurchases = async (id: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT p.id, p.user_id, p.product_id, p.total_price, p.user_id
       FROM labecommerce_purchases AS p
       JOIN labecommerce_users AS u
       ON p.user_id = u.id
       WHERE p.user_id ='${id}'
       `)
    return result[0][0]
} 