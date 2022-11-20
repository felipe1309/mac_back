import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import Users from '../../models/Users'
import { returnToken } from '../../types/returnToken'
export const getMeData: RequestHandler = async (req, res) => {
  const token = req.headers.token as string
  const jwtData = jwt.verify(token, process.env.JWT_SECRET as string) as returnToken
  const user = await Users.findById(jwtData.id)
  console.log(user)
  return res.status(201).json({
    name: user.name,
    tipo: user.tipo
  })
}
