import { connection } from "../connection";

export const selectProducts = async ():Promise<any> => {
    const result = await connection("labecommerce_products")
       .select('*')
    return result
} 

export const selectProductPrice = async (id: string):Promise<any> =>{
    const productPrice = await connection("labecommerce_products")
    .select('price')
    .where('id', id)

    return productPrice[0]
}