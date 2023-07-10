import bot from '@/utils/telegram'

import type { NextApiRequest, NextApiResponse } from 'next'

async function apiBot(require: NextApiRequest, response: NextApiResponse){
  await bot.handleUpdate(require.body)
  response.json({ message: 'Tudo certo!' })
}

export default apiBot
