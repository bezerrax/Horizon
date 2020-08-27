const {
  prefix
} = require("../../../config.json");

module.exports = async (client, message) => {

  if (message.author.bot || message.channel.type == 'dm') return; //

  const args = message.content.slice(prefix.length).trim().split(/ +/g),
  // Argumentos providenciados depois do prefixo+comando
  command = args.shift().toLowerCase() // Nome do comando ou, por outras palavras, o que vem depois do prefixo

  const mention = message.mentions.users.first(args[0]);
  if (mention && mention === client.user) {
    message.reply(`como ousa me pertubar! :rage:\n\> Meu prefixo é \`\`${prefix}\`\`. Use \`\`${prefix}help\`\` para saber mais!`);
  }


  if (!message.content.startsWith(prefix) && !message.content.startsWith(`<@742428324768383048>`)) return; // Se a mensagem não começar com o prefixo do bot, dá return, ou seja, ele não vai responder


  let commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command)); // Tentar obter o comando que o usuário tentou usar (através do nome ou de aliases)
  if (commandFile) commandFile.run(client, message, args); // Caso exista o comando que o usuário tentou usar, executa esse comando

}