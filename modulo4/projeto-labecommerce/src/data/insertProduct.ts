import { connection } from "../connection";

export const insertProduct = async (
    id: string,
    name: string,
    price: number,
    image_url: string
) => {
    await connection.insert({
        id,
        name,
        price,
        image_url,
    }).into('labecommerce_products')
}