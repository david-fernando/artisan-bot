import type { NextApiResponse } from 'next'
import { Bot } from "grammy";
import * as dotenv from 'dotenv'

dotenv.config()

// const webHookUrl = `${process.env.VERCEL_URL}/api/bot`

const token = `${process.env.BOT_TOKEN}`

const sorryMessage = `Sinto muito, mas ainda não posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

// const isProduction = process.env.NODE_ENV === 'production'

const bot = new Bot(token)

// if(isProduction){
//   bot.setWebHook(`${webHookUrl}/${token}`, { allowed_updates: ["message"] });
// }

bot.on('message', (context) => context.reply(sorryMessage));

function apiBot(_:any, response: NextApiResponse){

  bot.start()
    .then(()=> console.log('Bot iniciado'))
    .catch((error)=> console.log(error))

  return response.json({ message: 'All nice!' })

}

export default apiBot
