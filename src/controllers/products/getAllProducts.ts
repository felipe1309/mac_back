import { RequestHandler } from 'express'
import Products from '../../models/Products'
export const getAllProducts: RequestHandler = async (_req, res) => {
  try {
    const products = await Products.find()
    return res.status(201).json(products)
  } catch (error) {
    return res.status(404).json(error)
  }
}
