import type { NextApiResponse } from 'next'
import  { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv'

function apiBot(_:any, response: NextApiResponse){
  dotenv.config()
  const bot = new Telegraf(`${process.env.BOT_TOKEN}`);

  const initialMessage = `Olá, meu nome é Artisan!
Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

  const sorryMessage = `Sinto muito, mas ainda posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`


  bot.start((context) => context.reply(initialMessage));

  bot.on('text', (context) => context.reply(sorryMessage));

  bot.launch();

  response.json({ message: 'All Nice!' })
}

export default apiBot
