import  { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

// const isProductionEnvironment = process.env.NODE_ENV === 'production'

// if(isProductionEnvironment){
//   bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}/bot${process.env.BOT_TOKEN}`)
// }

(async()=>await bot.launch())()

export default bot