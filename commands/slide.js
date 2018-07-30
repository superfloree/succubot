const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   const lines = [
        "There are 36 species of pussies, but only 35 after i destroy yours.",
        "Damn, girl, your bone structure is giving my bone structure.",
        "If you were a tree... you'd be a good tree.",
        "Girl I put the STD in stud, all I need is u.",
        "Are you my appendix? Because I don't know anything about you but this feeling in my gut is telling me that I should take you out.",
        "Are you Little Cesars? Because you're hot and I'm ready.",
        "Are you an angel? Because I've got an erection.",
        "I wanna paint you green and spank you like a disobedient avocado.",
        "Do you like to draw? Because you can put the d in raw.",
        "Hey cutie, are you the police? Cuz I know you ain't here for me but you're still making me nervous.",
        "I lack a gag reflex ;)",
        "Just to inform you, I'm on the phone with iTunes customer support. They've made a mistake. You're the hottest single of 2018.",
        "Are you a trash can? 'Cause I'd like to take you out.",
        "Are you a trash can? 'Cause I'd like to fill you with my junk.",
        "Are you a trash can? Cause I'd love to fill you with babies.",
        "Well shoot! I had a really great pickup line, but you're so damn gorgeous you just made me forget it!",
        "On a scale of one to America, how free are you tonight?",
        "If I could rearrange the alphabet I'd put my dick in your ass.",
        "I want to kiss you passionately on the lips and then slowly move my way up to your belly button.",
        "I'd like to do consensual things to your face.",
        "You're like my pinky toe. Little, cute, and I'll probably bang you on my coffee table tonight.",
        "Oh no! I dropped my MAGNUM CONDOM for my MONSTER DONG",
        "Hey, you should come by my bedroom, I'm having a great sale. All clothes, 100% off.",
        "Do you have a name or can I call you mine?",
        "Hey cutie, are you into bad boys? 'Cause I'm bad at everything.",
        "lemme smash",
        "Are we gonna fuck, or do I have to lie to my friends about it?",
        "Hey mate are you stairs? Because you take my breath away.",
        "On a scale of 1-10, you are a 9 and I'm the one you need.",
        "If you were a fruit, you'd be a FINEapple.",
        "I'd hide every chair in the world just to have you sit on my face.",
        "One night with you is worth 18 years of child support.",
        "Did you sit in a pile of sugar? Because you have a sweet ass.",
        "Are you the SAT? Because I could do you for 3 hours and 45 minutes with a 10 minute break in between for snacks.",
        "Are you Google? Cuz you've got everything I've been searching for."
   ];

   const rand = Math.floor(Math.random() * lines.length);

   try {
       await message.member.send(lines[rand]);
       message.reply("Check your dms :kissing_heart:");
   }catch(e) {
       message.reply("Your perms aren't letting me slide into your dms!");
   }
}

module.exports.help = {
    name: "slide"
}