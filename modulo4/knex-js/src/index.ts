import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

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

const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = '${name}'
   `)
 
    return result[0][0]
}

app.get("/actors/:name", async (req: Request, res: Response) => {
   try {
     const name = req.params.name as string

     console.log(await getActorByName(name))
     res.end()
   } catch (error: any) {
       console.log(error.message)
     res.status(500).send("Unexpected error")
   }
})








const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});