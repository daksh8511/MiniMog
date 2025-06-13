import express from 'express'
import { FilteredWatch } from '../controller/FilterWatch.js';

const FilterProductRoutes = express.Router()

FilterProductRoutes.get('/filter', FilteredWatch)


export default FilterProductRoutes;