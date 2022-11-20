import { Router } from 'express'
import { addProduct } from '../../controllers/products/addProduct'
import { validationIsAdmin } from '../../middlewares/validationIsAdmin'
const router = Router()
router.post('/addProduct', validationIsAdmin, addProduct)
export default router
