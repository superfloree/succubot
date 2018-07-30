const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry plebs can't use that");
    let gUser = message.guild.member(message.mentions.users.first() 
    || message.guild.members.get(args[0]));
    if (!gUser) return message.reply("Input a user.");
//    let newrole = args.join(" ").slice(22);
//    if (!newrole) return message.reply("Input a role.");
 //   let grole = message.guild.roles.find('name', newrole);
  //  if (!grole) return message.reply("Couldn't find role.");

  let r = args.slice(1);
  let role = r.join(" ");
  console.log(role);
  if (!role) return message.reply("Input a role.");
  let grole = message.guild.roles.find(`name`, role);
  if (!grole) return message.reply("Couldn't find role.");

    // create role
/*    message.guild.createRole({
        name: newrole,
        color: 'RANDOM',
        mentionable: true,
    });
*/
    if(gUser.roles.has(grole.id)) return message.reply("They already have that role.");
    await(gUser.addRole(grole.id));

//    if(message.member.roles.has(grole.id)) return message.reply("You already have that role.");
//    await(message.member.addRole(grole.id));

    message.channel.send(`${gUser} is now ${grole}`);

}

module.exports.help = {
    name: "give"
}