import type { NextApiResponse } from 'next'
import TelegramBot from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'

dotenv.config()

const webHookUrl = `${process.env.VERCEL_URL}/api/bot`



const token = `${process.env.BOT_TOKEN}`

const sorryMessage = `Sinto muito, mas ainda não posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

const isProduction = process.env.NODE_ENV === 'production'

const bot = new TelegramBot(token, {polling: true})

if(isProduction){
  bot.setWebHook(`${webHookUrl}/${token}`, { allowed_updates: ["message"] });
}

function apiBot(_:any, response: NextApiResponse){

  bot.on('message', (message) => {
    const chatId = message.chat.id;
  
    bot.sendMessage(chatId, sorryMessage);
  });

  return response.json({ message: 'All nice!' })

}

export default apiBot
