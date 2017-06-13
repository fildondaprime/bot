exports.run = function(client, message, args) {
    let statuses = {
      "online": "online",
      "on": "online",
      "invisible": "invisible",
      "offline": "invisible",
      "off": "invisible",
      "invis": "invisible",
      "i": "invisible",
      "dnd": "dnd",
      "idle": "idle"
    };
    if(!args[0]) return message.edit(`That's right you can call me a derp.`).then(setTimeout(message.delete.bind(message), 1000));
    let status = statuses[args[0].toLowerCase()];
    if(!status) {
      return message.edit(`Apparently I'm an idiot because ${status} isn't a valid status. Fucking derp.`).then(setTimeout(message.delete.bind(message), 1000));
    }
    if(status === "on") status = "online";
    if(status === "off") status = "invisible";
    if(status === "i") status = "invisible";
    if(status === "offline") status = "invisible";
    client.user.setStatus(status)
    .then(u=> {
      message.edit(`Status changed to ${status}`).then(setTimeout(message.delete.bind(message), 1000));
    }).catch(e=> {
      message.edit(`Error while changing status to: ${status}\n\`\`\`${e}\`\`\``).then(setTimeout(message.delete.bind(message), 1000));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 4
};

exports.help = {
  name: 'status',
  description: 'Changes the Status of the client/user',
  usage: 'status [online/invisible/dnd/idle]'
};
