import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from './connection';
import { request } from 'http';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Ex 1

//a)

const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
   `)

   return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
   try {
      const id = req.params.id

      console.log(await getActorById(id))

      res.end()
   } catch (error: any) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
   }
})

//b)

const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}";
   `);
   return result[0][0]
}

//c)

const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
   const count = result[0][0].count;
   return count;
}


// Ex 2

//a) 
const updateActor = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
      .update({
         salary: salary,
      })
      .where("id", id);
}

//b) 
const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
      .delete()
      .where("id", id);
}

//c)

const avgSalary = async (gender: string): Promise<any> => {
   const result = await connection("Actor")
     .avg("salary as average")
     .where({ gender });
 
   return result[0].average;
}

//Ex 3

// a)
app.get("/actor/:id", async (req: Request, res: Response) =>{
   try {
      const id = req.params.id;
      const actor = await getActorById(id)

      res.status(200).send(actor)
   }catch(error: any){
      res.status(400).send({message: error.sqlMessage || error.message})
   }
})

//b)

app.get("/actor", async (req: Request, res: Response)=>{
   try {
      const gender = req.query.gender as string
      const count = await countActors(gender)
      res.status(200).send({quantity: count})
   }catch(error: any){
      res.status(400).send({message: error.sqlMessage || error.message})
   }
})

//Ex 4
// a)
app.put("/actor", async (req: Request, res: Response)=>{
   try{
      await updateActor(req.body.id, req.body.salary)
      res.status(200).send("Salary updated!")
   }catch(error: any){
      res.status(400).send({message: error.sqlMessage || error.message})
   }
})

//b)
app.delete("/actor/:id", async (req: Request, res: Response)=>{
   try{
      await deleteActor(req.params.id)
      res.status(200).send({message: "Actor deleted!"})
   }catch(error: any){
      res.status(400).send({message: error.sqlMessage || error.message})
   }
})


// Server

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});