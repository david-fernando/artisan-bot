import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const app = express()

app.use(helmet());

app.use(cookieParser())

app.use(express.json())

const server = app.listen(process.env.PORT || 3333, ()=>{
  console.log('Servidor iniciado')
})

export default server