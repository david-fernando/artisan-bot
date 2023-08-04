import bot from '@/utils/telegram'

import type { NextApiRequest, NextApiResponse } from 'next'

async function apiBot(require: NextApiRequest, response: NextApiResponse){
  const isPost = require.method === 'POST'
  if(!isPost){
    return response.json({ message: 'This route accepts only Post Requests' })
  }
  try {
    await bot.handleUpdate(require.body)
    response.json({ message: 'All right!' })
  } catch (error) {
    return response.json({ message: 'Erro 500!' })
  }

}

export default apiBot
