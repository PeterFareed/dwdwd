const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531505979779448838")
setInterval(function() {
channel.send(`L̸̮̮G̸̮̮S̸̮̮, ImAsR L̸̮̮G̸̮̮S̸̮̮, ImAsR L̸̮̮G̸̮̮S̸̮̮, ImAsR L̸̮̮G̸̮̮S̸̮̮, ImAsR L̸̮̮G̸̮̮S̸̮̮, ImAsR L̸̮̮G̸̮̮S̸̮̮, ImAsr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);