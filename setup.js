import bot from './src/utils/telegram'

(async()=>{
  await bot.launch({
    webhook: {
      domain: webHookUrl,
      secretToken: process.env.BOT_TOKEN
    }
  })
})()