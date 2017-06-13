exports.run = function(client, message, args) {
  if (message.author.id === client.user) return;
    message.delete();
  let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 1;
  message.channel.fetchMessages({limit: 100})
  .then(messages => {
    let message_array = messages.array();
    message_array = message_array.filter(m => m.author.id === client.user.id);
    message_array.length = messagecount + 1;
    message_array.map(m => m.delete().catch(console.error));
   });
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'prune',
  description: 'Prunes messages from yourself only.',
  usage: 'prune [number of messages]'
};
