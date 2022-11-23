import { RequestHandler } from 'express'
import Products from '../../models/Products'
export const getProduct: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Products.findById(id)
    return res.status(201).json(product)
  } catch (error) {
    return res.status(404).json({ msg: 'not product' })
  }
}
