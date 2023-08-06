import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import axios from 'axios'
const dotenv = require('dotenv')

dotenv.config()

const command:any = {}

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

const picWishToken = process.env.PICWISH_API_KEY

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

bot.command('aumentarnitidez', async(context) => {
  command[context.from.id] = 'aumentarnitidez'
  await context.reply('Envie a foto que você deseja melhorar a nitidez.');
})

bot.on(message('text'), (context) => {
  context.reply(reply)
})

bot.on('photo', async(context) => {
  if(command[context.from.id] !== 'aumentarnitidez'){
    return context.reply('Digite o camando desejado!')
  }
    const photo = context.message.photo
    const photoId = photo[photo.length - 1].file_id
    const fileInfo = await context.telegram.getFile(photoId)
    const photoUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileInfo.file_path}`;
    const data = {
      sync: '1',
      image_url: photoUrl,
      type: 'face'
    }
    const options = {
      method: 'POST',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded',
        'X-API-KEY': picWishToken 
      },
      data: JSON.stringify(data),
      url: 'https://techhk.aoscdn.com/api/tasks/visual/scale',
    }

    const result = await axios(options)

    const image = result.data.data.image
    console.log(image)
    context.replyWithPhoto(image);
    command[context.from.id] = ''
  }
)



export default bot