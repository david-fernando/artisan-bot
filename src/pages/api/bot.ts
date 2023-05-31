import bot from '@/utils/telegram'

import type { NextApiRequest, NextApiResponse } from 'next'

async function apiBot(require: NextApiRequest, response: NextApiResponse){
  await bot.init()
  try {
    response.statusCode = 200
    bot.on("message:text", (ctx) => ctx.reply("Bot em desenvolvimento"));
    return response.json({ message: 'Tudo certo!' })
  } catch (error) {
    console.error(error)
    response.statusCode = 500
    return response.json({ message: 'Erro 500!' })
  }

}

export default apiBot
