const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
let xp = require("./xp.json");

module.exports.run = async (bot, message, args) => {

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 0
        };
    }

    
}