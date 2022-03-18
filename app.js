const dotenv = require('dotenv')
const discord = require('discord.js')

//Create a new Discord client
const client = new discord.Client()

//When client is ready, logs 'Bot is ready!'
client.on('ready', (err) => {
    if(err) console.log(err)
    console.log('Bot is ready!')
})

//Make the client login and start
client.login(process.env.token, () => {
    console.log('Logged In!')
})