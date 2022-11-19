import { body } from 'express-validator'
import { Router } from 'express'
import { logUp } from '../../controllers/auth/logUp'
import { logIn } from '../../controllers/auth/logIn'
const route = Router()
route.get('/logIn', logIn)
route.post('/logUp', body('name').isString(), body('value').isNumeric(), logUp)
export default route
