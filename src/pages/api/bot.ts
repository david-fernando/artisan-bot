import type { NextApiResponse } from 'next'
import  { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

dotenv.config()

const initialMessage = `Olá, meu nome é Artisan!
Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

const sorryMessage = `Sinto muito, mas ainda não posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`
const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

const isProductionEnvironment = process.env.NODE_ENV === 'production'

if(isProductionEnvironment){
  bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}/bot${process.env.BOT_TOKEN}`)
}

async function apiBot(_:any, response: NextApiResponse){    

  // bot.start((context) => context.reply(initialMessage));
    
  // bot.on('text', (context) => context.reply(sorryMessage));

  // await bot.launch()

  setTimeout(()=>{
    response.json({ message: 'Ok' })
  }, 10000)

  // response.status(200)

}

export default apiBot
