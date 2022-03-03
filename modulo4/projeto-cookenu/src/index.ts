import {app} from "./app"
import { createRecipe } from "./endpoints/createRecipe"
import { followUser } from "./endpoints/followUser"
import { getRecipeById } from "./endpoints/getRecipeById"
import { getUserById } from "./endpoints/getUserById"
import { getUserProfile } from "./endpoints/getUserProfile"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

app.post("/signup", signup)
app.post("/login", login)
app.post("/user/follow", followUser)
app.get("/profile", getUserProfile)
app.post("/recipe", createRecipe)
app.get("/user/:id", getUserById)
app.get("/recipe/:id", getRecipeById)
