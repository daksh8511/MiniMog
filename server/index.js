import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { ConnectDB } from './config/mongodb.js'
import ProductRoutes from './routes/ProductRoutes.js'

const app = express()

ConnectDB()

app.use(express.json())
app.use(cors())

app.use('/api/post-product', ProductRoutes)

app.listen(4000, ()=>{
    console.log("Server Start")
})