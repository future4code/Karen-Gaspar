import {app} from "./app"
import { getUserProfile } from "./endpoints/getUserProfile"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

app.post("/signup", signup)
app.post("/login", login)
app.get("/profile", getUserProfile)