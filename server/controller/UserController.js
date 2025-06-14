import express from 'express'
import { GetAllUser, GetPerson, SignUp } from '../routes/UserRoutes.js';

const UserController = express.Router()

UserController.post('/signup', SignUp)
UserController.get('/getUser', GetAllUser)
UserController.get('/getPerson', GetPerson)


export default UserController;