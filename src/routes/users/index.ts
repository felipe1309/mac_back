import { Router } from 'express'
import { getMeData } from '../../controllers/users/getMeData'
const router = Router()
router.get('/getMeData', getMeData)
export default router
