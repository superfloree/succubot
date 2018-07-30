const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry plebs can't use that");
    let clr = args[0];
    let newrole = args.slice(1).join(" ");
    console.log(newrole);
    // create role
    message.guild.createRole({
        name: newrole,
        color: clr,
        mentionable: false,
    });

    message.channel.send(`Made role ${newrole}.`);
}

module.exports.help = {
    name: "makerole"
}