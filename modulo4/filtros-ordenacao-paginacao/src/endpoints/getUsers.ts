import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types"


export async function getUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const name = req.query.name
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)


      if (page < 1 || isNaN(page)) {
         page = 1;
      }
      let size = 5;
      let offset = size * (page - 1)

      if (sort !== "name" && sort !== "type") {
         sort = "nome";
      }

      if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
         order = "DESC";
      }

      const result = await connection("aula48_exercicio")
         .where('name', 'like', `%${name}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error: any) {
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