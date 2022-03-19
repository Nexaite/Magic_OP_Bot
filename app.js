const dotenv = require('dotenv')
const discord = require('discord.js')
dotenv.config()

//Create a new Discord client
const client = new discord.Client({intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]})

//When client is ready, logs 'Bot is ready!'
client.on('ready', (err) => {
    if(err) console.log(err)
    client.user.setActivity('magic', {type: 'LISTENING'})
    console.log('Bot is ready!')
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content.includes('magic')) message.channel.send('Magic OP')
})

//Make the client login and start

client.login(process.env.TOKEN)