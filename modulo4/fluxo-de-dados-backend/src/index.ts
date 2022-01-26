import express, { Request, Response } from "express";
import {Product, products} from "./data"

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercício 1

// app.get("/test", (req: Request, res: Response) => {
//     res.send("Teste ok!")
// })


//Exercício 3

app.post("/products", (req: Request, res: Response) => {
    try{
        const {name, price} = req.body

        if (!name || !price) {
            throw new Error ("Campos necessários para criar produto não foram informados")
        }
        const newProduct: Product = {
            id: Date.now().toString(),
            name,
            price
        }
        products.push(newProduct)
    
        res.status(200).send(products)
    }

    catch (error: any) {
    res.status(400).send(error.message)
    }
})


// Exercício 4

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})

// Exercício 5

// app.put("/products/:id/price", (req: Request, res: Response) => {
    
//     try{

//     const productId = req.params.id

//     if (!productId) {
//         throw new Error ("Id do produto não informado")
//     }

//     const newPrice = {}

//     for (let product of products) {
//         if (product.id === productId) {

//         }
//     }
    
//     res.status(200).send(products)
//     }

//     catch (error: any) {
//         res.status(400).send(error.message)
//     }
// })
