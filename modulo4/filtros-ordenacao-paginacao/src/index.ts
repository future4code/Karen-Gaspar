import { app } from './app';
import { getAllUsers } from './endpoints/getAllUsers';
import { getOrderedUsers } from './endpoints/getOrderedUsers';
import { getUserByName } from './endpoints/getUserByName';
import { getUserByType } from './endpoints/getUserByType';
import { getUsers } from './endpoints/getUsers';
import { getUsersPagination } from './endpoints/getUsersPagination';


app.get('/users/order', getOrderedUsers)

app.get('/users/pages', getUsersPagination)

app.get('/users', getUsers)

app.get('/users', getAllUsers)

app.get('/users/name', getUserByName)

app.get('/users/:type', getUserByType)




