import { RequestHandler } from 'express'
import { user } from '../../types/user'
import Users from '../../models/Users'
import jwt from 'jsonwebtoken'
type userLogInData = Omit<user, '_id' | 'name' | 'tipo'>
export const logIn: RequestHandler = async ({ body }, res) => {
  const { email, password, aditionalData } = body as userLogInData
  const findUser = await Users.findOne({ email })
  if (!findUser) {
    return res.status(404).json({ auth: false, token: null, msg: 'user not valid' })
  }
  const userFindTypeAuthIsGoogleAndTypeLogInIsGoogle = aditionalData.typeAuth === 'google' && findUser.aditionalData.typeAuth === 'google'
  const userFindTypeAuthIsFacebookAndTypeLogInIsFacebook = aditionalData.typeAuth === 'facebook' && findUser.aditionalData.typeAuth === 'facebook'
  if (userFindTypeAuthIsGoogleAndTypeLogInIsGoogle || userFindTypeAuthIsFacebookAndTypeLogInIsFacebook) {
    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET as string)
    return res.status(201).json({ auth: true, token })
  }
  const passwordValidate = await findUser.validatePassword(password)
  if (!passwordValidate) {
    return res.status(401).json({ auth: false, token: null, msg: 'user not valit or password invalit' })
  }
  const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET as string)
  return res.status(201).json({ auth: true, token })
}
