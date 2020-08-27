module.exports = {
	config: {
		name: 'teste', // nome do comando
		aliases: [], // se quiser aliases, só colocar:          aliases: ['aliase1', 'aliase2', 'aliase3']  etc.
        description: "Apenas teste de comando",
		category: "moderacao" // muita atenção com isso! este campo tem que corresponder a um nome de uma das pastas das categorias, dentro da pasta de comandos!
	},
	run: async (client, message, args) => {

        message.channel.send('Testando...'); // Envia uma mensagem no chat onde o comando foi executado

	}
}
