import { RequestHandler } from 'express'
import { user } from '../../types/user'
import jws from 'jsonwebtoken'
import User from '../../models/Users'
type userData = Omit<user, '_id'>
export const logUpWiht: RequestHandler = async (req, res) => {
  const { email, name, aditionalData } = req.body as userData
  console.log(req.body)
  const newUser = new User({
    name,
    email,
    tipo: 'normal',
    aditionalData
  })
  const userSave = await newUser.save()
  const token = jws.sign({ id: userSave._id }, process.env.JWT_SECRET as string)
  return res.status(201).json({ auth: true, token })
}
