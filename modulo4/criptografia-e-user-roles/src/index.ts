import {app} from './app'
import { getUserProfile } from './endpoints/getUserProfile';
import { createUserLogin } from './endpoints/login';
import { createUser } from './endpoints/signup'

app.post("/user/signup", createUser);
app.post("/user/login", createUserLogin);
app.get("/user/profile", getUserProfile)