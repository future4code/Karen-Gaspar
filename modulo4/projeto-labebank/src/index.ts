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

    // o type string[] transforma a data em array e junto com o split elimina a / entre os números
    const clientBirthDate: string[] = birthDate.split("/")
    // novo objeto substitui o type da data de nascimento
    const birthDateConvert: Date ={
      day: Number(clientBirthDate[0]),
      month: Number(clientBirthDate[1]),
      year: Number(clientBirthDate[2]),
    }
    // variável para definir a data atual com mesmo type da data de nascimento convertida
    const currentDate: Date = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    }

    // condicional de preenchimento de dados obrigatórios
    if (!name || !cpf || !birthDate) {
      errorCode = 422
      throw new Error("Please check the fields")
    }
    // condicional de idade mínima obrigatória
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

// app.get("/clients/:cpf", (req: Request, res: Response)=>{
//   let errorCode = 400
//   try{
//     const {name, cpf} = req.params
//     res.status(200).send("Deu bom!")
//   }catch(error: any){
//     res.status(errorCode).send("Deu ruim!")
//   }
// })

// app.put("/clients/", (req: Request, res: Response)=>{
//   let errorCode = 400
//   try{
//     res.status(200).send("Deu bom!")
//   }catch(error: any){
//     res.status(errorCode).send("Deu ruim!")
//   }
// })