import type { NextApiResponse } from 'next'
import { Bot, webhookCallback } from "grammy";
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

webhookCallback(bot, "next-js")

bot.on('message', (context) => context.reply(sorryMessage));

(async () => {
  bot.start()
    .then(()=> console.log('Bot iniciado'))
    .catch((error)=> console.log(error))
})()


function apiBot(_:any, response: NextApiResponse){

  return response.json({ message: 'Tudo certo!' })

}

export default apiBot
