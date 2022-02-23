import {app} from './app'
import { createUserLogin } from './endpoints/login';
import { createUser } from './endpoints/signup'

app.post("/user/signup", createUser);
app.post("/user/login", createUserLogin)