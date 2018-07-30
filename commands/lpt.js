const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const lpts = [
        "Roommates only clean if they think they’re getting laid? Catfish them on the Internet to convince them to clean.",
        "Find fat girls at the gym and go out with them. They'll have lower standards and when they lose weight they'll become hot.",
        "People will stop showing you pictures of their children if you whisper “oh fuck yeah” under your breath when you look at their photos.",
        "When applying for a job online, prepare ten fake horrendous resumes, then submit them right before submitting your own mediocre resume. You will look much better in comparison by the time the reviewer gets to yours.",
        "If you're ever drawing names out of a hat and you don't like the person you picked, say you got yourself so you can pick again.",
        "Don’t want to pay full price for an electronic device? Buy it at Best Buy, return it, and buy it again at a much lower price when it’s moved to the “Open Box” section.",
        "You don't have to pay for your meal if you're forcibly removed from the restaurant.",
        "If you're sick and don't want to see a doctor, cough or sneeze in your coworkers drink. They'll see a doctor and you'll figure out what sickness you have.",
        "Tell your partner and/or children that you're popping out to get cigarettes and will be back in an hour. Increase the time you are gone with every visit. When you eventually desert them, you will have a much longer headstart and be more likely to succeed in your bid for freedom.",
        "Pose as a woman on a dating app with a link to your Amazon wishlist by using the image of a random girl on Instagram. Flirt and scam men into buying you things from your list.",
        "Can't make it to the bathroom in time? Shit your pants standing next to a senior citizen and everyone will assume it was them.",
        "Have a hoarder in your family? Introduce them to crack and they will sell all their stuff to feed the addiction.",
        "Always own up to little stupid mistakes. Make a big production out of it. People will begin to trust you and will believe you when you lie to cover a big mistake.",
        "If your college website uses 'TurnItIn' to check for plagiarism, simply add quotes at the beginning and end of your entire paper in white font and it will interpret this as one long citation, giving you a 0% match.",
        "Trying to find your perfect partner? Just tell the police someone robbed you, and when they ask for a description just describe exactly the sort of person you find most attractive - they'll get a bunch of them in a line up for you!",
        "When robbing a store or someone apply temporary tattoos ahead of time. The cops will ask for visual identifiers of the criminal which will mean they will look for someone with the 'star tattoo on his right hand'.",
        "If you are ever shopping in a supermarket and a kid bites you, be load and swear a lot, if the parent comes over to you angry for upsetting their kid, claim that he bit you and that you are HIV positive. This will traumatise the parent and make them be more responsible with their kid.",
        "If you're in the middle of an intense argument or if someone is yelling directly in your face, respond with 'FIRST OF ALL, BRUSH YOUR TEETH'. It'll absolutely destroy their self confidence and you'll win the argument/fight by default.",
        "Have a rare, incurable disease? Go out and infect as many people as possible, more sick people means more demand for a cure.",
        "If there is someone doing work inside of your house (builder, electrician, etc.), offer them a drink, and then put adderall in it to make them work faster.",
        "Prostitutes are cheaper by the hour than a licensed therapist and it's okay just to talk to them.",
        "Don't want to pay for your drinks or food? Have a friend run inside and punch you/take your phone and run after them. Nobody is gonna stop you.",
        "Have a shit personality? Just tell people you have autism. Now people will be nicer to you instead of disliking you.",
        "Trying to get a guy/girl’s phone number but they don’t want to talk to you? Crash into their car. Then you’ll be legally required to exchange contact information.",
        "Need a pothole fixed? Grab a can of spraypaint, paint a dick around it and complain to the city.",
        "Paint yourself white to avoid getting shot by the police.",
        "When dining, play a reverse card to your server so he pays the meal.",
        "If you have to fart in public yell 'Bomb!'. People will be so startled that you can let one rip without fear of being heard.",
        "Put a cigarrete in your birthday cake if you run out of candles.",
        "Steal clothes without raising suspicion by going to the mall naked.",
        "Flying with a fussy child? Strap a helmet on your kid and everyone will think your child is special needs and be very tolerant of their crying.",
        "Whenever your kid is lying to you, ask them 'do you want to know how I know you're lying?' and tell them what their tell is. Years of constructive critisism will make them excellent liars who can later on make a living by lying to people.",
        "Fill your empty 5-hour energy bottles with liquor, that way you can take a shot or make a mix drink anywhere without anyone thinking you're drinking. It works especially well at work.",
        "Your kid a picky eater? Roll them a blunt, their appetite will increase afterwards.",
        "Lots of noisy children playing in your street? Post posters around your neighbourhood warning parents that there is a known predator living in your area. The parents will lock their children inside and you can enjoy some peace and quiet.",
        "Mess with the wrong people and need to hide out for a bit? Go to the ER and claim you’re suicidal. They’ll send you to a psych hospital where you can color and do puzzles until things calm down.",
        "Consider getting your family heirlooms appraised. That book that's been passed down for some 500 years may have historical value that you can sell for drug money.",
        "‘Accidentally’ leave some romantic, vanilla porn on your browsing history. Your SO probably knows you already watch porn, but now when they go snooping, they will be comforted into thinking you aren’t as perverted as the stuff you actually watch.",
        "Train your body to only shit at work. You will be paid to do your business, and you will save a shit ton of money by not buying toilet paper.",
        "Feeling tired? Wear a gauze wrapped around your elbow. If you fall asleep at work you can blame it on 'giving blood this morning.''",
        "Tell your self-conscious daughter she’s fat to save money on groceries every month.",
        "Put liquor in a bottle of cough syrup so you can take shots at work without anyone noticing. As a bonus, everyone will think you're sick, so they won't want to interact with you.",
        "Having a dry spell? Attend a sex addiction support group for an easy lay.",
        "Keep a handful of sand in your pocket so you can throw it in someone's eyes in case you need a couple of extra seconds to escape.",
        "As a bystander to a fist fight, always yell 'Suck his dick!'.",
        "When walking your dog, always carry a baggie in your hand so people think you are going to pick up after your dog even though you have no intention of doing so.",
        "If you’re new to a city and need to find drugs, check the counties arrest page. Find who has any related drug charges and add them on Facebook.",
        "If you let people down consistently enough eventually disappointment becomes the standard and you can just keep being a garbage person and it’s all cool.",
        "If you faked sick to get out of work today, get really drunk tonight so you look rough in the morning.",
        "Write the full name of someone you hate on your body everyday in permanent marker that way no matter how or when you die, they'll become a suspect.",
        "You don't need to pay for your drinks at the bar if you pass out in the ambulance.",
        "When someones yawning stick your finger in their mouth to assert dominance."
    ];
    const rand = Math.floor(Math.random() * lpts.length);
    message.channel.send(lpts[rand]);
}

module.exports.help = {
    name: "lpt"
}