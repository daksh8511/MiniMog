import express from 'express'
import { AddProduct } from '../controller/ProductController.js'

const ProductRoutes = express.Router();

ProductRoutes.post('/product-adding', AddProduct)

export default ProductRoutes;