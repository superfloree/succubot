const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   const nb = [
        "If you were a tree... you'd be a good tree.",
        "Are you my appendix? Because I don't know anything about you but this feeling in my gut is telling me that I should take you out.",
        "Are you Little Cesars? Because you're hot and I'm ready.",
        "Are you an angel? Because I've got an erection.",
        "I wanna paint you green and spank you like a disobedient avocado.",
        "Hey cutie, are you the police? Cuz I know you ain't here for me but you're still making me nervous.",
        "Just to inform you, I'm on the phone with iTunes customer support. They've made a mistake. You're the hottest single of 2018.",
        "Are you a trash can? 'Cause I'd like to take you out.",
        "Are you a trash can? 'Cause I'd like to fill you with my junk.",
        "Well shoot! I had a really great pickup line, but you're so damn gorgeous you just made me forget it!",
        "On a scale of one to America, how free are you tonight?",
        "If I could rearrange the alphabet, I'd put my dick in your ass.",
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
        "Did you sit in a pile of sugar? Because you have a sweet ass.",
        "Are you the SAT? Because I could do you for 3 hours and 45 minutes with a 10 minute break in between for snacks.",
        "Are you Google? Cuz you've got everything I've been searching for.",
        "Let me speak French between your legs :wink:",
        "Hey baby, wanna make a big mistake?",
        "Say baby. You're pretty, I'm pretty, what say we go back to my place and stare at each other for a while.",
        "Are you medusa? cause I'm rock hard.",
        "I'm no weatherman, but you can expect 2 inches tonight.",
        "I don't know if you're in my range, but I'd sure like to take you back to my domain.",
        "Are you a drill sergeant? Because you have my privates standing at attention.",
        "Are you the Gulf of Mexico? Because I wanna drill you & make a huge mess.",
        "Did it hurt when you fell from Tennessee? 'cause you're the only ten I heaven.",
        "You smell like trash, can I take you out?",
        "You’re so beautiful you made me forget my pick up line.",
        "What's your name? Because I'll be screaming it all night long.",
        "Did you grow up on a chicken farm? 'Cause you sure know how to raise a cock.",
        "I'd like to plug my solution into your equation.",
        "You must be Windows 95 because you've got me feeling so unstable.",
        "You have a trojan? hmm... I think I'll need to take a look at that backdoor.",
        "If I was sin^2 and you were cos^2, together we would be 1.",
        "Are you a Tardis? Cause when I look into your eyes I feel like I'm flying around the universe.",
        "I just shit in my pants... Can I get in yours?",
        "Are you Broca’s aphasia? Because you leave me speechless.",
        "Baby you light up my world like my primary visual cortex.",
        "Do you like pizza? Cuz I want a pizza dat ass!",
        "I'll sniff your butt if you sniff mine."
   ];

   const fem = [
        "There are 36 species of pussies, but only 35 after I destroy yours.",
        "Damn, girl, your bone structure is giving my bone structure.",
        "Girl I put the STD in stud, all I need is u.",
        "Are you a trash can? Cause I'd love to fill you with babies.",
        "I want to kiss you passionately on the lips and then slowly move my way up to your belly button.",
        "I'd hide every chair in the world just to have you sit on my face.",
        "One night with you is worth 18 years of child support.",
        "I wish I was your derivative so I could lie tangent to your curves."
   ]

   const masc = [
        "Damn, boi, your bone structure is giving my bone structure.",
        "Boi I put the STD in stud, all I need is u.",
        "Do you like to draw? Because you can put the d in raw.",
        "I lack a gag reflex ;)",
        "You look like a hard worker. I have an opening you can fill.",
        "Do you work at Subway? Because I could really go for a footlong.",
        "Are you a candle? Because I'm going to blow you.",
        "Are you a burger? Because you can be the meat between my buns. "
   ]

   let lines = [];
   if (message.member.roles.has('469713754741932043')) lines = nb.concat(fem);
   else if (message.member.roles.has('469713693559750667')) lines = lines.concat(masc);
   else lines = nb;

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