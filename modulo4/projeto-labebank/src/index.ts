import express, { Request, Response } from "express"
import cors from "cors"

import { AddressInfo } from "net";
import { Client, clients, Date } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.get("/clients", (req: Request, res: Response) => {
  res.status(200).send(clients)
})


app.post("/clients", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    
    const { name, cpf, birthDate} = req.body

    const sameCpf = clients.find((client)=> client.cpf === req.body.cpf)
   
    const clientBirthDate: string[] = birthDate.split("/")
   
    const birthDateConvert: Date ={
      day: Number(clientBirthDate[0]),
      month: Number(clientBirthDate[1]),
      year: Number(clientBirthDate[2]),
    }
    
    const currentDate: Date = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    }

    
    if (!name || !cpf || !birthDate) {
      errorCode = 422
      throw new Error("Please check the fields")
    }
   
    if (sameCpf){
      errorCode = 422
      throw new Error("This CPF is already registered")
    }
    
    if (currentDate.year - birthDateConvert.year < 18){
      errorCode = 401
      throw new Error("The user needs to be 18 to open an account")
    }
    else if (currentDate.year - birthDateConvert.year === 18)
    if (currentDate.month < birthDateConvert.month){
      errorCode = 401
      throw new Error("The user needs to be 18 to open an account")
    }
    else if (currentDate.month === birthDateConvert.month)
      if (currentDate.day < birthDateConvert.day){
      errorCode = 401
      throw new Error("The user needs to be 18 to open an account")
    }

    const newClient: Client = {
      name,
      birthDate,
      cpf,
      balance: 0,
      transactions: []
    }

    clients.push(newClient)
    res.status(200).send({ message: "Account created successefuly!" })
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.get("/clients/balance", (req: Request, res: Response)=>{
  let errorCode = 400
  try{
    const cpf: string = req.query.cpf as string
    const client: Client | undefined = clients.find((client) => client.cpf === cpf)

    if (!cpf){
      errorCode = 422
      throw new Error("Please check the queries")
    }

    if(!client){
      errorCode = 404
      throw new Error("Client not found")
    }

    res.status(200).send(client)
  }catch(error: any){
    res.status(errorCode).send({message: error.message})
  }
})

// app.put("/clients/", (req: Request, res: Response)=>{
//   let errorCode = 400
//   try{
//     res.status(200).send("Deu bom!")
//   }catch(error: any){
//     res.status(errorCode).send("Deu ruim!")
//   }
// })