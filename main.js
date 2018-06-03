const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("*");
var fprefix = ("");

bot.on('ready' , () => {
    bot.user.setPresence({ game: { name: 'Regarder les vies défiller| *help' , type : 0}})
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
     
    if (message.content === "*test"){
        message.reply("oui ça marche!");
    }
    if(!message.content.startsWith(fprefix)) return;
    var args = message.content.substring(fprefix.length).split(' ');
    switch(args[0].toLowerCase()){


        case "@reset().life(@mention()) : ":
        if(user)
        console.log(user);
        break;
        case "fdp":message.reply(", merci d'aretter de dire ça..."); if(message.deletable){message.delete();}
        if(message.mentions.users){ message.reply((":angry:")) } break;
        

    }

    
    if(message.content === "je suis dyslexique" ){
         message.reply(":sob:");
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#43A440')
        .addField("Commandes du bot :" 
        , " \n *help : pour afficher cette liste"
    
    );
      message.channel.sendEmbed(help_embed);
    }
    if(message.content === prefix + "AdminSetUp" ){
        if(message.channel.permissionsFor(message.member).hasPermission("MANAGE_CHANNELS")){
            message.guild.createEmoji();
        }
        else{message.reply("Non t'es pas ADMIN donc NON!" + "\n ..." + "\n ..." + "\n Bon ok je vais t'aider..."
         + "\n ..." + "\n ..." + "\n Ha non le serveur est déja setup ;)!");}
    }
});
