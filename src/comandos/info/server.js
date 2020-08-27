const sampQuery = require('samp-query')
const Discord = require('discord.js')
module.exports = {
  config: {
    name: "server",
    aliases: ["sv"],
    description: "Obtém informações sobre um servidor SAMP",
    category: "info"
  },
  run: async (client, message, args) => {
    if (args.length) {
      const host = args[0]
      const port = args[1] ? args[1]: 7777
      try {
        sampQuery({
          host, port
        }, (err, res) => {
          if (err) {
            message.reply("digite um <ip> <port> válido!")
            return
          }
          const embed = new Discord.MessageEmbed()
          .setTitle("Dados do servidor:")
          .addField("IP:", `${res.address}:${port}`)
          .addField(`Hostname:`, `${res.hostname} (${res.rules.version})`)
          .addField(`Gamemode:`, res.gamemode)
          .addField("Players Online:", `${res.online}/${res.maxplayers}`)
          .addField(`Site:`, `[${res.rules.weburl}](https://${res.rules.weburl})`)
          .setThumbnail("https://images-ext-1.discordapp.net/external/Ldd17i_uMQNIOfPUtawBMzLc8sZc7AuiNbwal88vxrs/https/forum.sa-mp.com/images/samp/logo_forum.gif")
          .setColor("RANDOM")
          .setTimestamp(Date.now())

          message.reply(embed)

        })
      } catch (error) {
        console.error(error)
        message.reply("digite um <ip> <port> válido.")
      }
    } else {
      const embed = new Discord.MessageEmbed()
      .setTitle(`h/server ou h/sv`)
      .setDescription("Obtém informações de um servidor SAMP.")
      message.reply(embed)
    }
  }
}