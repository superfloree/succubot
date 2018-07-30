const Discord = require("discord.js");

const dom = new RegExp('[Dd][Oo][Mm]');
const swtch = new RegExp('[Ss][Ww][Ii][Tt][Cc][Hh]');
const sub = new RegExp('[Ss][Uu][Bb]');
const chastity = new RegExp('[Cc][Hh][Aa][Ss][Tt][Ii][Tt][Yy]');
const keyholder = new RegExp('[Kk][Ee][Yy][Hh][Oo][Ll][Dd][Ee][Rr]');
const locked = new RegExp('[Ll][Oo][Cc][Kk][Ee][Dd]');
const cuck = new RegExp('[Cc][Uu][Cc][Kk]');
const bull = new RegExp('[Bb][Uu][Ll][Ll]');
const hotwife = new RegExp('[Hh][Oo][Tt][Ww][Ii][Ff][Ee]');
const daddy = new RegExp('[Dd][Aa][Dd][Dd][Yy]');
const mommy = new RegExp('[Mm][Oo][Mm][Mm][Yy]');
const little = new RegExp('[Ll][Ii][Tt][Tt][Ll][Ee]');
const owner = new RegExp('[Oo][Ww][Nn][Ee][Rr]');
const pet = new RegExp('[Pp][Ee][Tt]');
const maid = new RegExp('[Mm][Aa][Ii][Dd]');
const master = new RegExp('[Mm][Aa][Ss][Tt][Ee][Rr]');
const mistress = new RegExp('[Mm][Ii][Ss][Tt][Rr][Ee][Ss][Ss]');
const slave = new RegExp('[Ss][Ll][Aa][Vv][Ee]');
const watersports = new RegExp('[Ww][Aa][Tt][Ee][Rr][Ss][Pp][Oo][Rr][Tt][Ss]');
const bbwbhm = new RegExp('[Bb][Bb][Ww]|[Bb][Hh][Mm]|[Bb][Bb][Ww]/?[Bb][Hh][Mm]');
const sistrap = new RegExp('[Ss][Ii][Ss][Ss][Yy]$|[Tt][Rr][Aa][Pp]$|[Ss][Ii][Ss][Ss][Yy]/?[Tt][Rr][Aa][Pp]$');
const sistraplvr = new RegExp('[Ss][Ii][Ss][Ss][Yy] ?[Ll][Oo][Vv][Ee][Rr]|[Tt][Rr][Aa][Pp] ?[Ll][Oo][Vv][Ee][Rr]|[Ss][Ii][Ss][Ss][Yy]/?[Tt][Rr][Aa][Pp] ?[Ll][Oo][Vv][Ee][Rr]');
const furry = new RegExp('[Ff][Uu][Rr][Rr][Yy]');
const abdl = new RegExp('[Aa][Bb]/?[Dd][Ll]');
const hypno = new RegExp('[Hh][Yy][Pp][Nn][Oo]');
const gay = new RegExp('[Gg][Aa][Yy]');
const straight = new RegExp('[Ss][Tt][Rr][Aa][Ii][Gg][Hh][Tt]');
const bisexual = new RegExp('^[Bb][Ii]([Ss][Ee][Xx][Uu][Aa][Ll])?');
const pansexual = new RegExp('[Pp][Aa][Nn]([Ss][Ee][Xx][Uu][Aa][Ll])?');
const asexual = new RegExp('[Aa]Cc][Ee]|[Aa][Ss][Ee][Xx][Uu][Aa][Ll]');
const queer = new RegExp('[Qq][Uu][Ee][Ee][Rr]');
const poly = new RegExp('[Pp][Oo][Ll][Yy]([Aa][Mm][Oo][Rr][Oo][Uu][Ss])?');
const nb = new RegExp('[Nn][Bb]|[Nn][Oo][Nn][- ]?[Bb][Ii][Nn][Aa][Rr][Yy]');
const mtf = new RegExp('[Mm][Tt][Ff]');
const ftm = new RegExp('[Ff][Tt][Mm]');
const female = new RegExp('[Ff][Ee][Mm][Aa][Ll][Ee]');
const male = new RegExp('[Mm][Aa][Ll][Ee]');
const donotdm = new RegExp('[Dd][Oo] ?[Nn][Oo][Tt] ?[Dd][Mm]');
const asktodm = new RegExp('[Aa][Ss][Kk] ?[Tt][Oo] ?[Dd][Mm]');
const dmsopen = new RegExp('[Dd][Mm][Ss] ?[Oo][Pp][Ee][Nn]');
const red = new RegExp('[Bb][Ll][Oo][Oo][Dd] ?[Rr][Ee][Dd]');
const orange = new RegExp('[Tt][Aa][Nn][Gg][Ee][Rr][Ii][Nn][Ee] ?[Oo][Rr][Aa][Nn][Gg][Ee]');
const yellow = new RegExp('[Pp][Ii][Ss][Ss] ?[Yy][Ee][Ll][Ll][Oo][Ww]');
const green = new RegExp('[Tt][Oo][Xx][Ii][Cc] ?[Gg][Rr][Ee][Ee][Nn]');
const teal = new RegExp('[Tt][Ee][Aa][Ll][ -]?[Ii][Ss][Hh]');
const blue = new RegExp('[Ss][Aa][Dd][Bb][Oo][Ii] ?[Bb][Ll][Uu][Ee]');
const purple = new RegExp('[Pp][Ll]?[Uu][Rr][Pp][Ll][Ee] ?[Nn][Uu][Rr][Pp][Ll][Ee]');
const pink = new RegExp('[Cc][Uu][Tt][Ii][Ee] ?[Pp][Ii][Nn][Kk]');
const brown = new RegExp('[Ss][Hh][Ii][Tt][Tt][Yy] ?[Bb][Rr][Oo][Ww][Nn]');
const black = new RegExp('[Ee][Dd][Gg][Yy] ?[Bb][Ll][Aa][Cc][Kk]');
const white = new RegExp('[Bb][Aa][Ss][Ii][Cc] ?[Ww][Hh][Ii][Tt][Ee]');
const rp = new RegExp('[Rr][Oo][Ll][Ee][Pp][Ll][Aa][Yy]');
const exhib = new RegExp('[Ee][Xx][Hh][Ii][Bb][Ii][Tt][Ii][Oo][Nn][Ii][Ss][Tt]');
const voy = new RegExp('[Vv][Oo][Yy][Ee][Uu][Rr]');

module.exports.run = async (bot, message, args) => {
    let role = args.join(" ");
    let id = "";
    if (!role) return message.reply("Input a role.");

    switch(true) {
        case (dom.test(role)) :
            id = "468473007283896320";
            break;
        case (swtch.test(role)) :
            id = "468473049482788864";
            break;
        case (sub.test(role)) :
            id = "468473093216796674";
            break;
        case (chastity.test(role)) :
            id = "468501513874964490";
            break;
        case (keyholder.test(role)) :
            id = "468473112858591252";
            break;
        case (locked.test(role)) :
            id = "468472991949258765";
            break;
        case (cuck.test(role)) :
            id = "468472950358802443";
            break;
        case (bull.test(role)) :
            id = "468473152335380480";
            break;
        case (hotwife.test(role)) :
            id = "468473167552184320";
            break;
        case (daddy.test(role)) :
            id = "468499554807971841";
            break;
        case (mommy.test(role)) :
            id = "468499589591465984";
            break;
        case (little.test(role)) :
            id = "468499572126122004";
            break;
        case (owner.test(role)) :
            id = "468499538693324800";
            break;
        case (pet.test(role)) :
            id = "468473646763999232";
            break;
        case (maid.test(role)) :
            id = "468473671128842250";
            break;
        case (master.test(role)) :
            id = "468499654871482380";
            break;
        case (mistress.test(role)) :
            id = "472526675872186381";
            break;
        case (slave.test(role)) :
            id = "468499678053269504";
            break;
        case (watersports.test(role)) :
            id = "468498621235462145";
            break;
        case (bbwbhm.test(role)) :
            id = "468474108972367882";
            break;
        case (sistrap.test(role)) :
            id = "472082596730241044";
            break;
        case (sistraplvr.test(role)) :
            id = "472082625587052544";
            break;
        case (furry.test(role)) :
            id = "468536513995472906";
            break;
        case (abdl.test(role)) :
            id = "468536563689717761";
            break;
        case (hypno.test(role)) :
            id = "470666138892763168";
            break;
        case (gay.test(role)) :
            id = "468473280794329091";
            break;
        case (straight.test(role)) :
            id = "468473363090636801";
            break;
        case (bisexual.test(role)) :
            id = "468473306878705664";
            break;
        case (pansexual.test(role)) :
            id = "468473327145582623";
            break;
        case (asexual.test(role)) :
            id = "468473377389019157";
            break;
        case (queer.test(role)) :
            id = "468473544335163412";
            break;
        case (poly.test(role)) :
            id = "468473343608225798";
            break;
        case (nb.test(role)) :
            id = "469713811834798092";
            break;
        case (ftm.test(role)) :
            id = "469713773964558336";
            break;
        case (mtf.test(role)) :
            id = "469713796211015682";
            break;
        case (female.test(role)) :
            id = "469713754741932043";
            break;
        case (male.test(role)) :
            id = "469713693559750667";
            break;
        case (donotdm.test(role)) :
            id = "468533391499853825";
            break;
        case (asktodm.test(role)) :
            id = "468533423053471755";
            break;
        case (dmsopen.test(role)) :
            id = "468533455307800589";
            break;
        case (red.test(role)) :
            id = "471105330000953344";
            break;
        case (orange.test(role)) :
            id = "471105665830617088";
            break;
        case (yellow.test(role)) :
            id = "471105736580005908";
            break;
        case (green.test(role)) :
            id = "471105997159530532";
            break;
        case (teal.test(role)) :
            id = "471106269881696259";
            break;
        case (blue.test(role)) :
            id = "471106356607320065";
            break;
        case (purple.test(role)) :
            id = "468257960846557194";
            break;
        case (pink.test(role)) :
            id = "471106733436174356";
            break;
        case (brown.test(role)) :
            id = "471106057830137856";
            break;
        case (black.test(role)) :
            id = "470714775601676288";
            break;
        case (white.test(role)) :
            id = "470714427377844255";
            break;
        case (rp.test(role)) :
            id = "472602529843249185";
            break;
        case (exhib.test(role)) :
            console.log("test2");
            id = "473366356809482290";
            break;
        case (voy.test(role)) :
            id = "473366388430340116";
            break;
        default :
            return message.reply("Couldn't find role.");
            break;
    }

    if(!message.member.roles.has(id)) return message.reply("You don't have that role.");
    await(message.member.removeRole(id));
    message.channel.send(`You no longer have ${role}.`);


    
//    if (!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send("sorry plebs can't use that");
/*    let role = args.join(" ");
    if (!role) return message.reply("Input a role.");
    let grole = message.guild.roles.find(`name`, role);
    if (!grole) return message.reply("Couldn't find role.");
    
    if(!message.member.roles.has(grole.id)) return message.reply("You don't have that role.");
    await(message.member.removeRole(grole.id));

    message.channel.send(`You no longer have ${grole}`);
*/
}

module.exports.help = {
    name: "remove"
}