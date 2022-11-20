import { Router } from 'express'
import { addProduct } from '../../controllers/products/addProduct'
import { getAllProducts } from '../../controllers/products/getAllProducts'
import { validationIsAdmin } from '../../middlewares/validationIsAdmin'
const router = Router()
router.post('/addProduct', validationIsAdmin, addProduct)
router.get('/getAllProducts', getAllProducts)
export default router
