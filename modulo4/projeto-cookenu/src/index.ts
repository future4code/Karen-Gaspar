import {app} from "./app"
import { createRecipe } from "./endpoints/createRecipe"
import { getUserById } from "./endpoints/getUserById"
import { getUserProfile } from "./endpoints/getUserProfile"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

app.post("/signup", signup)
app.post("/login", login)

app.get("/profile", getUserProfile)
app.get("/user/:id", getUserById)

app.post("/recipe", createRecipe)