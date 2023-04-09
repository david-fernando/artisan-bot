import  { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

const isProductionEnvironment = process.env.NODE_ENV === 'production'

// const webHookUrl = `${process.env.VERCEL_URL}/api/bot/bot${process.env.BOT_TOKEN}`

// if(isProductionEnvironment){
//   bot.telegram.setWebhook(webHookUrl)
// }

export default bot