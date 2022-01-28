import express, { Request, Response } from "express";
import { Product, products } from "./data"

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


//Exercício 3 e 7

app.post("/products", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (price <= 0) {
            throw new Error("Preço deve ser maior que zero")
        }

        if (!name || !price) {
            throw new Error("Campos necessários para criar produto não foram informados")
        }

        if (typeof name !== "string") {
            throw new Error("Nome do produto deve ser do tipo string")
        }

        if (typeof price !== "number") {
            throw new Error("Preço do produto deve ser do tipo number")
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
        switch (error.message) {
            case "Campos necessários para criar produto não foram informados":
                res.status(422)
                break
            case "Nome do produto deve ser uma string":
                res.status(422)
                break
            case "Preço do produto deve ser um number":
                res.status(422)
                break
            case "Preço deve ser maior que zero":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }

})


// Exercício 4

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})

// Exercício 5 e 8

app.put("/products/:id/price", (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const newPrice = req.body.price


        if (!id) {
            throw new Error("ID do produto não informado")
        }

        if (!newPrice) {
            throw new Error("Preço do produto não informado")
        }

        if (typeof newPrice !== "number" || newPrice <= 0) {
            throw new Error("Preço do produto deve ser do tipo number maior que zero")
        }

        let isProductFound = false

        for (let product of products) {
            if (product.id === id) {
                product.price = newPrice
                isProductFound = true
            }
        }

        if (!isProductFound) {
            throw new Error("Produto não encontrado")
        }

        res.status(200).send(products)
    }

    catch (error: any) {
        switch (error.message) {
            case "Id do produto não informado":
                res.status(422)
                break
            case "Preço do produto não informado":
                res.status(422)
                break
            case "Preço do produto deve ser do tipo number":
                res.status(422)
                break
            case "Preço deve ser maior que zero":
                res.status(422)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// Exercício 6 e 9

app.delete("/products/:id", (req: Request, res: Response) => {

    try {
        const id = req.params.id

        if (!id) {
            throw new Error("Id do produto não informado")
        }

        let isProductFound = false

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                isProductFound = true
            }
        }

        if (!isProductFound) {
            throw new Error("Produto não encontrado")
        }

        res.status(200).send(products)
    }

    catch (error: any) {
        switch (error.message) {
            case "Id do produto não informado":
                res.status(422)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

