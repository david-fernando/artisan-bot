import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { enhancerPhoto, enhancerSelfie, addPhoto } from './commands';
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

bot.command('melhorarnitidezfoto', async(context) => enhancerPhoto(context))

bot.command('melhorarnitidezselfie', async(context) => enhancerSelfie(context))

bot.on(message('text'), (context) => {
  context.reply(reply)
})

bot.on('photo', async(context) => await addPhoto(context))

export default bot