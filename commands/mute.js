const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let logchannel = message.guild.channels.find('name', 'log');
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let muterole = client.guilds.get(message.guild.id).roles.find('name', 'muted');


if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);

if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);

if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    message.reply('No permission to execute, please contact Fildon_Prime');

if (!muterole) {
    message.reply('A Mute role has to be created called **muted**')
};

};
if (!logchannel) {
    message.guild.createChannel('log', 'text').then(message.channel.send('New Room created, Please execute the command again to mute.'))
};
if (!user) {
    message.reply('User to be muted is not mentioned');
};
if (!reason) { 
    message.reply('Reason for the mute is not mentioned. Please mention a reason after the User to be muted.');
};
if (!muterole) {
    message.reply('A Mute role has to be created called **muted**')
};
if (logchannel) {
    message.guild.member(user).addRole(muterole).then(() => {
        (client.channels.get(logchannel.id).sendEmbed(embed).catch(console.error));
        message.channel.send('**Muted**');
        message.delete();
    });    
}
const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('**Action**:', 'Mute')
    .addField('**user**:', `${user.username}#${user.discriminator}`)
    .addField('**Authority**:', `${message.author.username}#${user.discriminator}`)
    .addField('**Reason**:', `${reason}`);


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'mute',
  description: 'mutes a mentioned user',
  usage: 'mute [mention]'
};