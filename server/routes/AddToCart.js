import express from 'express'
import { AddToCart, RemoveFromCart } from '../controller/AddToCartController.js'

const AddToCartRoutes = express.Router()

AddToCartRoutes.post('/addToCart', AddToCart)
AddToCartRoutes.post('/removeFromCart', RemoveFromCart)

export default AddToCartRoutes