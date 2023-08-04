import bot from '@/utils/telegram'

import type { NextApiRequest, NextApiResponse } from 'next'

async function apiBot(require: NextApiRequest, response: NextApiResponse){
  try {
    const { handle } = require.body
    await bot.handleUpdate(handle)
    response.statusCode = 200
    response.json({ message: 'Tudo certo!' })
  } catch (error) {
    console.error(error)
    console.log(response.statusCode)
    return response.json({ message: 'Erro 500!' })
  }

}

export default apiBot
