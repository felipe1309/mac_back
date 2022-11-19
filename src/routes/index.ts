import { Router } from 'express'
import auth from './auth'
import products from './products'
const route = Router()
route.use('/auth', auth)
route.use('/products', products)
export default route
