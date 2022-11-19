import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { config } from 'dotenv'
import cors from 'cors'
import routes from './routes'
import { dbInit } from './utils/db'
config()
const app = express()
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))
app.use(cors())
app.use(morgan('dev'))
dbInit()
app.use('/', routes)
app.get('/', (_req, res) => {
  res.send('init')
})

export default app
