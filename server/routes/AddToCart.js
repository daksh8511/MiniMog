import express from 'express'
import { AddToCart } from '../controller/AddToCartController.js'

const AddToCartRoutes = express.Router()

AddToCartRoutes.post('/addToCart', AddToCart)

export default AddToCartRoutes