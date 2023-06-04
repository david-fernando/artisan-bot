import { Telegraf } from 'telegraf';
const dotenv = require('dotenv')

dotenv.config()

// const webHookUrl = `${process.env.VERCEL_URL}/api/bot/`

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

bot.start((ctx) => {
  ctx.reply('Bem-vindo ao meu bot!')
})

bot.help((ctx) => {
  ctx.reply('Ainda estou em desenvolvimento.')
})

bot.on('message', (ctx) => {
  ctx.reply(`Ainda estou em desenvolvimento`)
})

// (async()=>{
//   await bot.launch({
//     webhook: {
//       domain: webHookUrl,
//       secretToken: process.env.BOT_TOKEN
//     }
//   })
// })()


export default bot