const { inspect } = require('util')

module.exports = {
  config: {
    name: 'eval',
    aliases: ['e'],
    description: "interpretador",
    category: 'owner'
  },
  run: async (client, message, args) => {
    if(message.author.id !== '316962994737119232') return message.channel.send("Você não tem permissão para utilizar esse comando!");
    const input = args.join(" ");
    try {
      let output = eval(input);
      
      if(typeof output !== "string") output = inspect(output);
      
      if(output.size > 1950) output = output.substr(0, 1950);
      
      message.channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
      
    } catch (error) {
      message.channel.send(`**Error:**\n\`${error}\``);
    }
    
  }
  
}