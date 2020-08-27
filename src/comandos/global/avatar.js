const Discord = require("discord.js");

module.exports = {
  config: {
    name: "avatar",
    aliases: ["foto"],
    description: "Mostra o avatar de um usuário.",
    category: "info"
  },


  run: async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

    let avatar = user.displayAvatarURL({
      dynamic: true, format: "png", size: 1024
    });

    let avatarEmbed = new Discord.MessageEmbed()
    .setColor(`#00566c`)
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar);
    await message.channel.send(avatarEmbed);

  }



}