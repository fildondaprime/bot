module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Please welcome **${member.user.username}** to **${guild.name}**!`);
  member.user.send({
    embed: {
      color: Math.floor(Math.random()*16777215),
      description: `Welcome to **${guild.name}** \n we are a bunch of Hyperactive, Helpful and Fun people.\n Enjoy your stay here! \n On that note, **${guild.name}**! is a crew that everybody works together, \n Most importatly **Respect** has to be maintained within the crew!`
    }
  })

  
  guild.defaultChannel.send({
        embed: {
            
            color: Math.floor(Math.random()*16777215),
            fields: [{
                name: `Welcome **@${member.user.tag}** `,
                value: `Hope you have a Blast in **${guild.name}**`,
            }],

            
        }
    })
}
