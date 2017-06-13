exports.run = function(client, message, args) {
    message.delete();
    message.channel.send({
      embed: {
  title: "Respect!",
  description: "This crew is based on Friendship, Trust and Respect so respect other members, they will respect you back in return",
  color: 0x00AE86,
  footer: {
    "icon_url": `${message.author.avatarURL}`,
    "text": `@Fildy-Bot\n Message Executed by : ${message.author.username}`
  },
  thumbnail: {
    "url": `${message.author.avatarURL}`
  },
}
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'respect',
  description: 'respect command',
  usage: 'respect'
};
