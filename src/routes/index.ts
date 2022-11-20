import { Router } from 'express'
import auth from './auth'
import products from './products'
import users from './users'
const route = Router()
route.use('/auth', auth)
route.use('/products', products)
route.use('/users', users)

export default route
