/* My First Telegram Bot */
const TelegramApi = require('node-telegram-bot-api')
const token = '6183373370:AAG1HeGZGA0zyuV3kdmqAfSJF124kKDq8Xo';
const bot = new TelegramApi(token, {polling:true})
const {gameOptions, againOptions} = require('./options.js');
const chats = {} 

const startGame = async (chatId) => {
        await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а Вы должны попробовать его отгадать`);
        const randomNumber = Math.floor(Math.random()*10);
        chats[chatId] = randomNumber;
        await bot.sendMessage(chatId, 'Отгадывай', gameOptions);
}
const start = () => {
    bot.setMyCommands([
        {command:'/start', description: 'Начальное приветствие!'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Играть в игру'}
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
        if (text == '/game'){
            return startGame(chatId);
        }
        console.log(msg);
        return bot.sendMessage(chatId, 'Нераспознанная команда!');
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data == '/again'){
            return startGame(chatId);
        }

        if (data == chats[chatId]){
            return await bot.sendMessage(chatId, `Вы отгадали цифру ${chats[chatId]}! Поздравляем!`, againOptions);
        }
        else return await bot.sendMessage(chatId, `Вы не отгадали! Была загадана цифра ${chats[chatId]} Попробуйте ещё раз...`, againOptions)
        //bot.sendMessage(chatId, `Вы выбрали цифру ${data}`);
    })
}

start();


 
