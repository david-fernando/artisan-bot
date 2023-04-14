import { Bot } from "grammy";
import * as dotenv from 'dotenv'

dotenv.config()

const token = `${process.env.BOT_TOKEN}`
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.command("start", (context) => context.reply("Hello there!"));
bot.on("message", (context) => context.reply("Got another message!"));

export default bot