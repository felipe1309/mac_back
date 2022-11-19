import { RequestHandler } from 'express'
import { user } from '../../types/user'
import jws from 'jsonwebtoken'
import User from '../../models/Users'
type userData = Omit<user, '_id'>
export const logUp: RequestHandler = async (req, res) => {
  const { email, name, password, tipo } = req.body as userData
  const newUser = new User({
    name,
    email,
    password,
    tipo: tipo || 'normal'
  })
  newUser.password = await newUser.bcryptPassword(newUser.password)
  const userSave = await newUser.save()
  const token = jws.sign({ id: userSave._id }, process.env.JWT_SECRET as string)
  return res.status(201).json({ auth: true, token })
}
