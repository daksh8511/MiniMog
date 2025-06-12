import express from 'express'
import { GetAllUser, SignUp } from '../routes/UserRoutes.js';

const UserController = express.Router()

UserController.post('/signup', SignUp)
UserController.get('/getUser', GetAllUser)

export default UserController;