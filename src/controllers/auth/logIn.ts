import { RequestHandler } from 'express'

export const logIn: RequestHandler = (_req, res) => {
  return res.status(201).json({ msg: 'hola' })
}
