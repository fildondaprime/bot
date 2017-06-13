module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`**${user.username}** is now unbanned!.`);
};
