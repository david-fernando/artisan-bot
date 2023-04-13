import type { NextApiResponse } from 'next'
import TelegramBot from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'

dotenv.config()

const sorryMessage = `Sinto muito, mas ainda não posso executar nenhum comando! 
Estou em desenvolvimento, mas quando estiver pronta serei capaz de variais coisas legais como editar suas fotos, ou transforma-las em artes.`

const token = `${process.env.BOT_TOKEN}`

const bot = new TelegramBot(token, {polling: true})

bot.on('message', (message) => {
  const chatId = message.chat.id;

  bot.sendMessage(chatId, sorryMessage);
});

function apiBot(_:any, response: NextApiResponse){
  return response.json({ message: 'All nice!' })
}

export default apiBot
