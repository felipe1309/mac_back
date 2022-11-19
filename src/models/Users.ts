import { Schema, model, models } from 'mongoose'
import { genSalt, hash, compare } from 'bcryptjs'
const userShema = new Schema({
  tipo: {
    type: String,
    enum: ['admin', 'normal'],
    require: true,
    default: 'normal'
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
})
userShema.methods.bcryptPassword = async (password: string) => {
  console.log(password)
  const salt = await genSalt(10)
  return await hash(password, salt)
}
userShema.methods.validatePassword = async function (password: string) {
  try {
    return await compare(password, this.password)
  } catch (error) {
    return false
  }
}
export default models.Users || model('Users', userShema)
