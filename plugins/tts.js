const {
       Module,
       isPublic,
       sendTts,
       getAitts
} = require("../lib/");


Module(
        {
         
        pattern: "tts?(.*)",
        fromMe: isPublic,
        desc: "Its converte your text to voice",
        type: "converter",
},
		async (message, match) => {	
     match = match || message.reply_message.text;
    if (!match) return await message.reply("*_need any word!_*");
         await sendTts(message, match);
})

Module(
        {
         
        pattern: "aitts?(.*)",
        fromMe: isPublic,
        desc: "Its converte your text to aivoice",
        type: "ai",
},
		async (message, match) => {			
        await getAitts(message, match);
})
