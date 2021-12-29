const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CommandList } = require('../Commands/_COMMANDS');
const { botErrorHandler } = require('../utils/botErrorHandler');
const { botLogHandler } = require('../utils/botLogHandler');

const onReady = async (client) => {
	try {
		const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

		const commandData = [];

		CommandList.forEach((command) => commandData.push(command.data.toJSON()));
		await rest.post(
			Routes.applicationGuildCommand(
				client.user?.id || 'missing token',
				process.env.GUILD_ID
			),
			{ body: commandData }
		);

		botLogHandler.log('debug', 'Bot has connected to Discord!');
	} catch (error) {
		botErrorHandler('onReady event', error);
	}
};

module.exports = { onReady };
