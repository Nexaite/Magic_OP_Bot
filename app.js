const dotenv = require('dotenv')
const discord = require('discord.js')

//Create a new Discord client

const client = new discord.Client()

client.on('ready', (err) => {
    if(err) console.log(err)
    console.log('Bot is online!')
})
