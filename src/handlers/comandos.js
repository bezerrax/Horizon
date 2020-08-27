const {
  readdirSync
} = require('fs'); // precisa do fs instalado ( npm i fs )

module.exports = (client) => {

  const load = dirs => {

    const commands = readdirSync(`./src/comandos/${dirs}/`).filter(d => d.endsWith('.js'));

    for (let file of commands) {
      const comando = require(`../comandos/${dirs}/${file}`);
      try {
        client.commands.set(comando.config.name, comando);
        console.log(`O comando ${file} foi carregado! ✅`)
      } catch (error) {
        console.log(`O comando ${file} não foi carregado! ❌`)
      }


      if (comando.config.aliases) comando.config.aliases.forEach(a => client.aliases.set(a, comando.config.name));
    };
  };
  ["admin",
    "info",
    "owner",
    "moderacao"].forEach(x => load(x)); // as "categoriaX" são referentes às pastas dentro da pasta 'comandos'. Ex.: pasta 'Administração', pasta 'Moderação', pasta 'Entretenimento', etc.

}