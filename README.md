# Telegram Bot

# Hot to run
```bash
# Create .env file and fill the TG_API_BOT_TOKEN

# Run the main application
go run main.go
```

# How to create a new project
```bash
# Initialize the Go module for the Telegram bot
go mod init telegrambot

# Install the required packages
go get -u github.com/go-telegram-bot-api/telegram-bot-api/v5
go get github.com/joho/godotenv

# Run the main application
go run main.go
```

# Register a new bot

To register a new bot and obtain a token, follow this steps:

1. Go to **@botfather** on Telegram
2. Send **/newbot** command
3. Choose a _**botname**_ and a _**username**_
    - Note: The username should be unique and end with **_bot**, such as testbot1000_bot.
