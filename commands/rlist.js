const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botrole = message.guild.roles.find(`name`, "Succubot");
    if (!botrole) return message.channel.send("cant find bot's role");
    let lsar = message.guild.roles;
    for (var l in lsar) console.log(lsar.name);
}




module.exports.help = {
    name: "rlist"
}