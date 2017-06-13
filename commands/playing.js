exports.run = function(client, message, args) {
  var game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
 client.user.setGame(game);
  message.delete().catch(console.error);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["game"],
  permLevel: 4
};

exports.help = {
  name: 'playing',
  description: 'Changes the "Playing" status (game).',
  usage: 'game [game name]'
};
