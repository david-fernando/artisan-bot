import type { NextApiRequest, NextApiResponse } from 'next'
import bot from '@/utils/telegram'

async function apiBot(request: NextApiRequest , response: NextApiResponse){    
  try {
    await bot.handleUpdate(request.body);
    response.status(200).json({ message: 'All Nice!' });
  } catch (error) {
    response.status(500).json({ message: 'error' });
  }

}

export default apiBot
