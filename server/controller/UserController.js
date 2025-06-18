import express from 'express'
import { GetAllUser, GetPerson, SignIn, SignUp, DeleteAccount } from '../routes/UserRoutes.js';

const UserController = express.Router()

UserController.post('/signup', SignUp)
UserController.get('/getUser', GetAllUser)
UserController.get('/getPerson', GetPerson)
UserController.post('/signin', SignIn)
UserController.delete('/delete', DeleteAccount)


export default UserController;