import { Schema, model, models } from 'mongoose'
const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true,
    min: 0
  },
  image: {
    url: {
      type: String,
      required: true
    },
    public_id: {
      type: String,
      required: true
    }
  }
}, {
  versionKey: false,
  autoIndex: false
})
export default models.Products || model('Products', productSchema)
