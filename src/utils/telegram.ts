import  { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

(async()=>await bot.launch())()


export default bot