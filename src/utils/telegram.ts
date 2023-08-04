import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
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
  context.message
  context.reply(reply)
})

bot.on('photo', (context) => {

  const photo = context.message.photo

  const photoId = photo[photo.length - 1].file_id
  context.replyWithPhoto(photoId);
})

bot.on(message('text'), (context) => {
  context.reply(reply)
})


export default bot