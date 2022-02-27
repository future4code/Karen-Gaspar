import {app} from './app'
import { createUser } from './endpoints/createUser'
import { createUserLogin } from './endpoints/createUserLogin'
import { getUserProfile } from './endpoints/getUserProfile'

app.post("/user/signup", createUser)
app.post("/user/login", createUserLogin)
app.get("/user/profile", getUserProfile)

