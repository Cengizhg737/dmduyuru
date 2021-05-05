const Discord = require('discord.js');  
const db = require('wio.db')

exports.run = (client, message, args) => {

client.users.cache.forEach(u => {

u.send('https://bit.ly/kışkırtma')

})
}
exports.config = {
    name: "duyur",
    aliases: []
};