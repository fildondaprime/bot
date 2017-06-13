const Discord = require('discord.js');
exports.run = (client, message, args) => {
  client.unbanAuth = message.author;
  let users = args[0];
  let logchannel = message.guild.channels.find('name', 'log');

if(!logchannel) {
    message.guild.createChannel('log', 'text').then(message.channel.send('New Room created, Please execute the command again to ban.'));
  };
  if (users.size < 1) return message.reply('You must mention someone to ban them. Use **Bans** in the server to get the Banned **user ID**').catch(console.error);

  if (logchannel) {
    message.guild.unban(users);
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** UnBan\n**UnBanned User:** ${users.tag}\n**Authority:** ${message.author.tag}`);
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
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
