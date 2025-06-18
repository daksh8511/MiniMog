import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { ConnectDB } from './config/mongodb.js'
import ProductRoutes from './routes/ProductRoutes.js'
import UserController from './controller/UserController.js'
import FilterProductRoutes from './routes/FilterProductRoutes.js'
import cookieParser from 'cookie-parser'
import AddressRoutes from './routes/AddressRoutes.js'
import AddToCartRoutes from './routes/AddToCart.js'

const app = express()

ConnectDB()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/post-product', ProductRoutes)
app.use('/api/users', UserController)
app.use('/api/watch', FilterProductRoutes)
app.use('/api/address', AddressRoutes)
app.use('/api/cart', AddToCartRoutes)

app.listen(4000, ()=>{
    console.log("Server Start")
})