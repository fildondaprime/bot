exports.run = function(client, message, args) {
	message.channel.send(`**Pong!** \`${Date.now() - message.createdTimestamp} ms\``);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command.',
  usage: 'ping'
};
