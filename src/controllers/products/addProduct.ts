import { RequestHandler } from 'express'
import { UploadedFile } from 'express-fileupload'
import fs_extra from 'fs-extra'
import { product } from '../../types/products'
import { uploadImage } from '../../libs/claudinary'
import Products from '../../models/Products'
type productData = Omit<product, '_id'>
export const addProduct: RequestHandler = async (req, res) => {
  try {
    const { name, value } = req.body as productData
    let image
    if (req.files?.image) {
      const file = req.files.image as UploadedFile
      const fileResult = await uploadImage(file.tempFilePath)
      image = {
        url: fileResult.secure_url,
        public_id: fileResult.public_id
      }
      await fs_extra.remove(file.tempFilePath)
    }
    const newProduct = new Products({
      name, value, image
    })
    const productSave = await newProduct.save()
    return res.status(201).json(productSave)
  } catch (error) {
    return res.status(401).json(error)
  }
}
