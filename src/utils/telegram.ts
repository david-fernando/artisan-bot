import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { api } from '@/services/api';
const dotenv = require('dotenv')

dotenv.config()

const commands:any = {}

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

const url = process.env.VERCEL_URL || 'artisan-bot.vercel.app'

bot.telegram.setWebhook(`${url}/api/bot`)

const reply = `Olá sou Artisan! Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de 
transformar suas fotos em artes e varias outras coisas legais.`

const iDontUnderstandReply = `Não entendi! Por favor, escolha um dos comandos abaixo:
/melhorarnitidezselfie ideal para fotos com uma ou duas pessoas
/melhorarnitidezfoto ideal para fotos com varias pessoas`

bot.start((context) => {
  context.reply(reply)
})

bot.help((context) => {
  context.reply('Ainda estou em desenvolvimento.')
})

bot.command('melhorarnitidezfoto', async(context) => {
  commands[context.from.id] = 'enhancerPhoto'
  await context.reply('Já pode enviar sua foto!');
})

bot.command('melhorarnitidezselfie', async(context) => {
  commands[context.from.id] = 'enhancerSelfie'
  await context.reply('já pode enviar sua foto!');
})

bot.on(message('text'), (context) => {
  context.reply(reply)
})

bot.on('photo', async(context) => {
  if(Object.keys(commands).length === 0){
    return context.reply(iDontUnderstandReply)
  }
    const photo = context.message.photo
    const photoId = photo[photo.length - 1].file_id
    const fileInfo = await context.telegram.getFile(photoId)
    const photoUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileInfo.file_path}`;
    const command = commands[context.from.id]
    const image = await api[command](photoUrl)
    context.reply('Aqui estar sua foto!')
    context.replyWithPhoto(image);
    command[context.from.id] = ''
  }
)

export default bot