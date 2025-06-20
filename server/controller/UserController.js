import express from 'express'
import { GetAllUser, GetPerson, SignIn, SignUp, DeleteAccount, BecomeASeller } from '../routes/UserRoutes.js';

const UserController = express.Router()

UserController.post('/signup', SignUp)
UserController.get('/getUser', GetAllUser)
UserController.get('/getPerson', GetPerson)
UserController.post('/signin', SignIn)
UserController.delete('/delete', DeleteAccount)
UserController.post('/seller', BecomeASeller )


export default UserController;