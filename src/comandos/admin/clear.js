const Discord = require("discord.js");


module.exports = {
  config: {
    name: 'clear',
    aliases: ["limpar"],
    description: "Limpa o chat.",
    category: "admin"
  },



  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply(
      "nananina NÃO! Quem pensas que é? Volte já para sua sala.\n||Você precisa ter a permissão: Gerenciar mensangens.||"
    );
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 99)
      return message.reply(
      "forneça um número de até **99 mensagens** a serem excluídas"
    );

    const fetched = await message.channel.messages.fetch({
      limit: deleteCount + 1
    });
    message.channel.bulkDelete(fetched);
    message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({
      timeout: 5000
    }))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
  };


}