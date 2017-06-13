const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let logchannel = message.guild.channels.find('name', 'log');
    let user = message.mentions.users.first();
    let muterole = client.guilds.get(message.guild.id).roles.find('name', 'muted');

if (message.mentions.users.size < 1) return message.reply('You must mention someone to unmute them.').catch(console.error);

if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    message.reply('No permission to execute, please contact Fildon_Prime');
};
if (logchannel) {
    message.guild.member(user).removeRole(muterole).then(() => {
        (client.channels.get(logchannel.id).sendEmbed(embed).catch(console.error));
        message.channel.send('**UnMuted**');
        message.delete();
    });    
}
const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('**Action**:', 'UnMute')
    .addField('**user**:', `${user.username}#${user.discriminator}`)
    .addField('**Authority**:', `${message.author.username}#${user.discriminator}`)



}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'Unmutes a mentioned user',
  usage: 'unmute [mention]'
};