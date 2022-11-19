import { Router } from 'express'
import { addProduct } from '../../controllers/products/addProduct'
const router = Router()
router.post('/addProduct', addProduct)
export default router
