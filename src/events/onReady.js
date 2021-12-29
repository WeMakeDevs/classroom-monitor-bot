const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CommandList } = require('../Commands/_COMMANDS');
const { botErrorHandler } = require('../utils/botErrorHandler');
const { botLogHandler } = require('../utils/botLogHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');

const onReady = async (client) => {
	try {
		const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

		const commandData = [];

		CommandList.forEach((command) => commandData.push(command.data.toJSON()));
		//sample command data
		// const commands = [
		// 	new SlashCommandBuilder()
		// 		.setName('ping')
		// 		.setDescription('Replies with pong!'),
		// 	new SlashCommandBuilder()
		// 		.setName('server')
		// 		.setDescription('Replies with server info!'),
		// 	new SlashCommandBuilder()
		// 		.setName('user')
		// 		.setDescription('Replies with user info!'),
		// ].map((command) => command.toJSON());

		await rest
			.put(
				Routes.applicationGuildCommands(
					client.user?.id || 'missing token',
					process.env.GUILD_ID
				),
				{ body: commandData }
			)
			.then(() => console.log('Successfully registered application commands.'))
			.catch(console.error);

		botLogHandler.log('debug', 'Bot has connected to Discord!');
	} catch (error) {
		botErrorHandler('onReady event', error);
	}
};

module.exports = { onReady };
