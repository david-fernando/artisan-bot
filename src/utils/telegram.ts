import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
const dotenv = require('dotenv')

dotenv.config()

const command:any = {}

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

bot.command('test', async(context) => {
  command[context.from.id] = 'test'
  await context.reply('Envie a foto que você deseja melhorar a nitidez.');
})

bot.on(message('text'), (context) => {
  context.reply(reply)
})

bot.on('photo', (context) => {
  if(command[context.from.id] === 'test'){
    const photo = context.message.photo
    const photoId = photo[photo.length - 1].file_id
    const caption = context.message.caption || 'No caption'
  
    context.replyWithPhoto(photoId);
    command[context.from.id] = ''
  }
})



export default bot