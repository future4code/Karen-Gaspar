import {app} from './app'
import { createUser } from './endpoints/createUser'
import { createUserLogin } from './endpoints/createUserLogin'

app.post("/user/signup", createUser)
app.post("/user/login", createUserLogin)

