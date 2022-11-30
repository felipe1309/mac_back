import { Router } from 'express'
import { logUp } from '../../controllers/auth/logUp'
import { logUpWiht } from '../../controllers/auth/logUpWith'
import { logIn } from '../../controllers/auth/logIn'
const route = Router()
route.post('/logIn', logIn)
route.post('/logUp', logUp)
route.post('/logUpWith', logUpWiht)

export default route
