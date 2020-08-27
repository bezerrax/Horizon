const Discord = require('discord.js')

module.exports = {
  config: {
    name: "ping",
    aliases: ["pingar",
      "latencia"],
    description: "Mostra a latência da API.",
    category: "info"
  },
  run: async (client, message, args) => {
    const m = await message.channel.send('ping?');

    m.edit(
      `:satellite: | Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n:stopwatch: | Latência da API: **${Math.round(
        client.ws.ping
      )}ms**`);
  }
}