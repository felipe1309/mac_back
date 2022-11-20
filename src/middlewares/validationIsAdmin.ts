import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import Users from '../models/Users'
import { returnToken } from '../types/returnToken'
import { user } from '../types/user'
export const validationIsAdmin: RequestHandler = async (req, res, next) => {
  console.log(req.headers.token)
  if (!req.headers.token) return res.status(401)
  const { id } = jwt.verify(
    req.headers.token as string,
    process.env.JWT_SECRET as string
  ) as returnToken
  const user = (await Users.findById(id)) as user
  console.log(user)
  if (user.tipo !== 'admin') return res.status(401).send('not auterization')
  req.headers.userId = id
  console.log(req.headers.userId)
  next()
}
