import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { webhookCallback } from "grammy";
import bot from "./bot";
import * as dotenv from 'dotenv'

dotenv.config()

const webhookUrl = `${process.env.VERCEL_URL}`;
const token = `${process.env.BOT_TOKEN}`;
const app = express()

app.use(helmet());

app.use(cookieParser())

app.use(express.json())
app.use(`/${token}`, webhookCallback(bot, "express"));

const isDevelopment = process.env.NODE_ENV !== 'production'


const server = app.listen(Number(process.env.PORT) || 3333, async () => {
  if(isDevelopment){
    bot.start()
    .then(() => console.log('Bot iniciado'))
    .catch((error:any) => console.log(error))
    return;
  }
  
  await bot.api.setWebhook(`${webhookUrl}/${token}`);

  console.log('Servidor iniciado')
  
});

export default server