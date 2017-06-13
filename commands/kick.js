const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'log');

if (!logchannel) {
    message.guild.createChannel('log', 'text').then(message.channel.send('New Room created, Please execute the command again to mute.'))
};

if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick').catch(console.error);

if (reason.length < 1) return message.reply('You must supply a reason for the kick.');



if (!message.guild.member(user).kickable) return message.reply('cannot kick that member');

  
if (logchannel) {
    message.guild.member(user).kick().then(() => {
        (client.channels.get(logchannel.id).sendEmbed(embed).catch(console.error));
        message.channel.send('**Kicked**');
        message.delete();
    });    
}  

const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${user.tag}\n**Authority:** ${message.author.tag}\n**Reason:** ${reason}`);
}; 

  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
