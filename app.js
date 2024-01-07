const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TG_API_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Commands
bot.onText(/\/(.+)/, (msg) => {
    commands(msg)
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});

const commands = (msg) => {
    const chatId = msg.chat.id;
    const command = msg.text;
    const { first_name, last_name } = msg.from

    console.log(`Commands: ${command}`)

    switch (command) {
        case "/start":
            bot.sendMessage(chatId, "Hello");
            break;
        case "/ami":
            bot.sendMessage(chatId, `You're ${first_name} ${last_name}`);
            break;
        default:
            break;
    }
}
