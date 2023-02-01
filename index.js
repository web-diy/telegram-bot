const TelegramApi = require('node-telegram-bot-api')

const token = '6183373370:AAG1HeGZGA0zyuV3kdmqAfSJF124kKDq8Xo';

const bot = new TelegramApi(token, {polling:true})

bot.on('message', msg => {
    console.log(msg)
})



 
