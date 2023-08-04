import { Telegraf } from 'telegraf';
const dotenv = require('dotenv')

dotenv.config()

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

const url = process.env.VERCEL_URL || 'artisan-bot.vercel.app'

bot.telegram.setWebhook(`${url}/api/bot`)

const reply = `Olá sou Artisan! Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de 
transformar suas fotos em artes e varias outras coisas legais.`

bot.start((context) => {
  context.reply(reply)
})

bot.help((context) => {
  context.reply('Ainda estou em desenvolvimento.')
})

bot.command('dev', (context) => {
  context.reply(reply)
})

bot.on('message', (context) => {
  context.reply(`Ainda estou em desenvolvimento`)
})


export default bot