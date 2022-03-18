import { app } from './controller/app'
import { PostController } from './controller/PostContoller'
import UserController from './controller/UserController'

const userController = new UserController()
const postController = new PostController()

app.post('/users/signup', userController.signup)

app.post('/users/login', userController.login)

app.post('/posts/create', postController.post)

app.get('/posts/:id', postController.getPostById)
