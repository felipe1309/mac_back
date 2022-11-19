import { RequestHandler } from 'express'

export const logUp: RequestHandler = async (_req, res) => {
  res.status(201).json('holi')
}
