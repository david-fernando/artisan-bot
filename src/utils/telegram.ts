import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

dotenv.config()

const webHookUrl = `${process.env.VERCEL_URL}/api/bot/`

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

// (async()=>{
//   await bot.launch({
//     webhook: {
//       domain: webHookUrl,
//       secretToken: process.env.BOT_TOKEN
//     }
//   })
// })()


export default bot