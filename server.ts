import bot from '@/utils/telegram';

(async () => {
  try {
    await bot.launch();
    console.log('Bot is up and running!');
  } catch (error) {
    console.error('Failed to start the bot:', error);
  }
})();