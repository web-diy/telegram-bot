/* My First Telegram Bot */
const TelegramApi = require('node-telegram-bot-api')

const token = '6183373370:AAG1HeGZGA0zyuV3kdmqAfSJF124kKDq8Xo';

const bot = new TelegramApi(token, {polling:true})

 

const start = () => {
    bot.setMyCommands([
        {command:'/start', description: 'Начальное приветствие!'},
        {command: '/info', description: 'Получить информацию о пользователе'}
    ]
    )
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text == '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/2af/6db/2af6dbf1-4758-4b9a-8bd5-8f9d49af90f6/11.webp')
            return bot.sendMessage(chatId, 'Добро пожаловать в тестовый телеграмм-бот');
        }
        if (text == '/info'){
            return bot.sendMessage(chatId, `Ваше имя ${msg.from.first_name}`);
        }

        return bot.sendMessage(chatId, 'Не распознанная команда!');
        console.log(msg)
    })
}

start()


 
