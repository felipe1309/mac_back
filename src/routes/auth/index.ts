import { Router } from 'express'
import { logUp } from '../../controllers/auth/logUp'
import { logIn } from '../../controllers/auth/logIn'
const route = Router()
route.post('/logIn', logIn)
route.post('/logUp', logUp)
export default route
