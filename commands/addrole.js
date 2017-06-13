exports.run = (client, message, args) => {

let user = message.guild.member(message.mentions.users.first());
let nrole = args.slice(1).join(' ');
let role  = client.guilds.get(message.guild.id).roles.find('name', `${nrole}`);



if (!user) {
    message.reply('A user is not mentioned, please re-execute the command by mentioning the user.')
} else
if (!role) {
    message.reply('A role to be added is not mentioned.Please re-execute the command by adding a role.');
} else
if (message.member.roles.has(role.id)) {
    message.channel.send(`${user} already has ${role}`)
} else 
if (user, role) {
    message.guild.member(user).addRole(role.id).then(() => message.channel.send(`**${role}** added to **${user}**`));
};
}
//silentMC

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'addrole',
  description: 'adds the given role to the mentioned user',
  usage: 'addrole [user] '
};