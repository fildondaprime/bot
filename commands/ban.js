const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'log');


  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  
  if(!logchannel) {
    message.guild.createChannel('log', 'text').then(message.channel.send('New Room created, Please execute the command again to ban.'));
  };
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');

  if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');

  if (logchannel) {
    message.guild.ban(user);
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Authority:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(logchannel.id).send({embed});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
