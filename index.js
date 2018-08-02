const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");
let cooldown = new Set();
let cdsecs = 60;
let peach = "#ffcb72";
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir(__dirname + "/commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });

bot.on("error", (e) => console.error(e));

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online.`);
    bot.user.setActivity("~help for help", {type: "PLAYING"});
});

bot.on("message", async message => {
    if (message.channel.id != 454679280694198272 && message.author.id != 461702824779186176 && message.author.id != 155149108183695360 && !cooldown.has(message.author.id)) {
    cooldown.add(message.author.id);
    let xpadd = Math.floor(Math.random() * 10) + 15;

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 0
        };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtlvl = 5 * Math.pow(curlvl, 2) + 50 * curlvl + 100;
    //console.log(nxtlvl);
    xp[message.author.id].xp = curxp + xpadd;
    if (nxtlvl <= xp[message.author.id].xp) {
    //    console.log("in");
        xp[message.author.id].level = curlvl + 1;
        const lvlup = [
            `<@${message.author.id}>, you just reached level ${xp[message.author.id].level}! Congrats cutie :heart:`,
            `Heehee~ <@${message.author.id}>, you're at level ${xp[message.author.id].level} now! :blush:`,
            `<@${message.author.id}>, you just hit level ${xp[message.author.id].level}! :open_mouth:`,
            `Hey <@${message.author.id}>, wanna hear a secret? You're at level ${xp[message.author.id].level} now :wink:`,
            `Wow <@${message.author.id}>, you just got to level ${xp[message.author.id].level}! Good job boo~ :kissing_heart:`
        ]
        let rand = Math.floor(Math.random() * lvlup.length);
        bot.channels.get('447890081798291466').send(lvlup[rand]);
        curlvl = xp[message.author.id].level;
        xp[message.author.id].xp = 0;

        switch (true) {
            case (curlvl == 25) :
                if (!message.member.roles.has('471095203302866964')) {
                    await(message.member.addRole('471095203302866964'));
                    bot.channels.get('447890081798291466').send(`Wow <@${message.author.id}>, you managed to become a Cubus! Congratulations :heart_eyes:`);
                }
            case (curlvl == 20) :
                if (!message.member.roles.has('471100485755994112')) {
                    await(message.member.addRole('471100485755994112'));
                    bot.channels.get('447890081798291466').send(`Oooo~ <@${message.author.id}>, looks like you're a Demon now :kissing:`); 
                }
            case (curlvl == 15) :
                if (!message.member.roles.has('471101920916799488')) {
                    await(message.member.addRole('471101920916799488'));
                    bot.channels.get('447890081798291466').send(`Whew <@${message.author.id}>, guess who just became a Fiend? :smirk:`);
                }
            case (curlvl == 10) :
                if (!message.member.roles.has('472868826195820546')) {
                    await(message.member.addRole('472868826195820546'));
                    bot.channels.get('447890081798291466').send(`Heehee <@${message.author.id}>, you're an Imp now! :stuck_out_tongue_closed_eyes:`);
                }
            case (curlvl == 5) :
                if (!message.member.roles.has('472868899390750720')) {
                    await(message.member.addRole('472868899390750720'));
                    bot.channels.get('447890081798291466').send(`Whoa <@${message.author.id}>, you just graduated to Cultist! :flushed:`);   
                }
            case (curlvl == 1) :
                if (!message.member.roles.has('468471411741163520')) {
                    await(message.member.addRole('468471411741163520'));
                    bot.channels.get('447890081798291466').send(`Hey <@${message.author.id}>, look who's a Sinner now :stuck_out_tongue:`);
                }
        }

    }

    fs.writeFile("./xp.json",JSON.stringify(xp), err => {
        if (err) console.log(err)
    });

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, cdsecs * 1000);

    }

    if (message.author.bot) return;
    if (message.channel.type === "dm" || message.channel.id == 454679280694198272) return;

    let prefix = botconfig.prefix;
    // split message by spaces
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    // remove command at beginning of message call
    let args = messageArray.slice(1);
    

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    
    // ping command
    if (cmd === `${prefix}ping`) {
        return message.channel.send("pong");
    }

    // display level
    if (cmd == `${prefix}level`) {
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtlvl = 5 * Math.pow(curlvl, 2) + 50 * curlvl + 100;

        let rank = "";
        if (curlvl < 1) rank = "Member";
        else if (curlvl < 5) rank = "Sinner";
        else if (curlvl < 10) rank = "Cultist";
        else if (curlvl < 15) rank = "Imp";
        else if (curlvl < 20) rank = "Fiend";
        else if (curlvl < 25) rank = "Demon";
        else if (curlvl >= 25) rank = "Succubi/Incubi";
        else rank = "N/A";

        let lembed = new Discord.RichEmbed()
            .setDescription(rank + " " + message.author.username)
            .setColor(peach)
            .setThumbnail(message.author.avatarURL)
            .addField("Level " + curlvl, curxp + "/" + nxtlvl);

        return message.channel.send(lembed);
    }

    if (cmd === `${prefix}help`) {
        return message.channel.send("**Available Commands**\n" +
        "\`~add (role name)\` Add a role to yourself. \n" +
        "\`~remove (role name)\` Remove a role from yourself. \n" +
        "\`~lpt\` Get a ~~questionably ethical~~ life pro tip. \n" +
        "\`~slide\` Let me *sliiiiide* into your dms bb :wink: \n" +
        "\`~level\` Check your current level and XP. \n" +
        "\`~f\` Press f to pay respects. \n" +
        "\`~cum @member\` Nut on @member. \n\n" +
        "\`~makerole (role name)\` Create a role of the given name; Admin only. \n" +
        "\`~give @member (role name)\` Give @member the named role; Admin only. \n");
    }

    if (cmd === `${prefix}cum`) {
        let cMember = message.guild.member(message.mentions.users.first());
        if (!cMember) return message.reply("Enter a person to NUT over.");
        return message.channel.send(`${message.author} just nutted all over ${cMember} <:nut:431545463863246849> <:gayjizz:462297390708162560>`);
    }
/*
    // server info
    if (cmd === `${prefix}sinfo`){
        // need to do message.guild and not just guild so it knows which server 
        // to get icon from
        let sicon = message.guild.iconURL;
        let sembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#95f442")
        .setThumbnail(sicon)
        .addField("Server Name:", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.guild.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(sembed);
    }
*/
    // bot info
 /*   if (cmd === `${prefix}binfo`) {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#95f442")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)

        return message.channel.send(botembed);
    }*/

    if (cmd === `${prefix}f`) {
        const rand = Math.random();
        if (rand < 0.3) message.reply("Repects have been paid.");
        else message.reply("Respects have been paid.");
    }

    // report command
  /*  if (cmd === `${prefix}report`) {
        let rUser = message.guild.member(message.mentions.users.first() 
        || message.guild.members.get(args[0]));

        if (!rUser) return message.channel.send("Couldn't find user.");
        let reason = args.join(" ").slice(22);

        let repEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#95f442")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);
        
        let repchannel = message.guild.channels.find(`name`, "logs");
        if (!repchannel) return message.channel.send("No log channel.");
        message.delete().catch(O_o=>{});
        repchannel.send(repEmbed);
        return;
    }
*/
/*
    if (cmd === `${prefix}giverole`) {
        // create test role
        message.guild.createRole({
            data: {
                name: 'test',
                color: 'RANDOM',
                hoist: true,
                mentionable: false,
            },
        });

    }*/
    
})

bot.login(botconfig.token);
