import bot from './telegram'

const url = process.env.VERCEL_URL || 'artisan-bot.vercel.app'

bot.telegram.setWebhook(`${url}/api/bot`)
