import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types"


export async function getOrderedUsers(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
    
       let sort = req.query.sort as string
       let order = req.query.order as string

 
       if(sort !== "name" && sort !== "type"){
          sort= "email";
       }
 
       if(order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ){
          order = "ASC";
       }
 
       const result = await connection("aula48_exercicio")
       .orderBy(sort, order)
       
       const users= result.map(toUser)
 
       if(users.length < 1){
          throw new Error("Não foram encontrados valores com esse parametro")
       }
 
       res.status(200).send(users)
 
    } catch (error : any) {
       console.log(error.message)
       res.status(422).send({
          message: error.message
       })
    }
 }

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }

}