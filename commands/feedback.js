const Discord = require('discord.js');
exports.run = function(client, message) {

  let args = message.content.split(' ').slice(1).join(' ');
  let feed = args
  
if (!feed) return message.reply('please give a feedback');
message.delete();
  client.users.get('199570626724233216').send({
    embed: {
      color: Math.floor(Math.random()*16777215),
      author: {
      name: client.user.username,
      icon_url: client.user.avatarURL,
    },
    title: 'Feedback',
    description: `${args}`,
    fields : [
      {
        name: 'Sender Name',
        value: `${message.author}`
      }
    ]
    }
  }).then( () =>
  message.channel.send(`${message.author} Thanks your message was recorded`).then( () =>
  message.author.send('Thanks message recorded!')
))

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'feedback',
  description: 'recordes feedback',
  usage: 'feedback [essages]'
};
