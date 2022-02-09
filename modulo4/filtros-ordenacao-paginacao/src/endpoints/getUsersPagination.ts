import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types"


export async function getUsersPagination(
   req: Request,
   res: Response
): Promise<void> {
   try {

      let page = Number(req.query.page)


      if (page < 1 || isNaN(page)) {
         page = 1;
      }
      let size = 5;
      let offset = size * (page - 1)


      const result = await connection("aula48_exercicio")
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