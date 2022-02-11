import { app } from "./app";
import { createProducts } from "./endpoints/createProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { createUsers } from "./endpoints/createUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchases";

app.post('/users', createUsers)
app.get('/users', getAllUsers)

app.post('/products', createProducts)
app.get('/products', getAllProducts)

app.post('/purchases', createPurchases)
app.get('/users/:user_id/purchases', getUserPurchases)

