import express from 'express'
import { GetAllUser, GetPerson, SignIn, SignUp } from '../routes/UserRoutes.js';

const UserController = express.Router()

UserController.post('/signup', SignUp)
UserController.get('/getUser', GetAllUser)
UserController.get('/getPerson', GetPerson)
UserController.post('/signin', SignIn)


export default UserController;