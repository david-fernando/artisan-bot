import type { NextApiResponse } from 'next'
import bot from '@/utils/telegram'

const initialMessage = `Olá, meu nome é Artisan!
Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

const sorryMessage = `Sinto muito, mas ainda não posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

const webHookUrl = `${process.env.VERCEL_URL}/api/bot/`

function apiBot(_:any, response: NextApiResponse){    
  bot.start((context) => context.reply(initialMessage));
    
  bot.on('text', (context) => context.reply(sorryMessage));

  bot.launch({
    webhook: {
      domain: webHookUrl,
      secretToken: process.env.BOT_TOKEN
    }
  })

  return response.json({ message: 'All nice!' })

}

export default apiBot
