module.exports = async client => {

  try {

    let embed = new MessageEmbed()
    .setTitle(`:bell: Usuário trocou de nome/apelido!`)
    .setColor(`RANDOM`)
    .setDescription(
      `${oldUser} para ${newUser}`
    )

    let channel = oldMessage.guild.channels.cache.find(ch => ch.name === 'log');
    //Esse log é o nome do canal no servidor
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};