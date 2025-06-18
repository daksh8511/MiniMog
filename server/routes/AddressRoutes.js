import express from 'express'
import { AddAddress, GetAddress, RemoveAddress } from '../controller/AddressController.js'

const AddressRoutes = express.Router()

AddressRoutes.post('/addAddress', AddAddress)
AddressRoutes.get('/getAddress', GetAddress)
AddressRoutes.post('/removeAddress', RemoveAddress)

export default AddressRoutes