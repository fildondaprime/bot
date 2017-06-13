module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
  member.user.send({
    embed: {
      color: Math.floor(Math.random()*16777215),
      description: `Good Bye Hope you had fun in the server, ${guild.name}`
    }
  });
};
