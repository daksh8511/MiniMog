import express from 'express'
import { AddProduct, GetAllProduct } from '../controller/ProductController.js'

const ProductRoutes = express.Router();

ProductRoutes.post('/product-adding', AddProduct)
ProductRoutes.get('/product-getting', GetAllProduct)

export default ProductRoutes;