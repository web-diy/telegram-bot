/* My First Telegram Bot */
const TelegramApi = require('node-telegram-bot-api')

const token = '6183373370:AAG1HeGZGA0zyuV3kdmqAfSJF124kKDq8Xo';

const bot = new TelegramApi(token, {polling:true})

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
}) 



 
