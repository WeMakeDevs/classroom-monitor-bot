//Importing important libraries

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

const { prefix } = require('./config.json');

require('dotenv').config();

const presence = require('./src/Commands/presence');
const restrict = require('./src/Commands/restrictedWords');
const { botErrorHandler } = require('./src/utils/botErrorHandler');
const { botLogHandler } = require('./src/utils/botLogHandler');
const { loadCommands } = require('./src/utils/loadCommands');
const { validateEnv } = require('./src/utils/validateEnv');

//wrap up it in an iife fn
(async () => {
	const allEnvValidated = await validateEnv();
	if (!allEnvValidated.valid) {
		botLogHandler.log('error', allEnvValidated.message);
		return;
	}

	botLogHandler.log('debug', 'setting commands');
	const loadedAndFixedCommands = await loadCommands();

	for (const file of loadedAndFixedCommands) {
		const command = require(`./src/Commands/${file}`);

		client.commands.set(command.name, command);
	}
	botLogHandler.log('debug', 'loaded Commands successfully');

	botLogHandler.log('debug', 'starting bot');
	client.on('ready', () => {
		console.log(
			`Classroom Monitor is currently running on version v${
				require('./package.json').version
			}`
		);

		//Bot Status
		presence(client);

		// restricted words
		restrict(client, (message) => {});
	});

	client.on('message', (message) => {
		if (
			!message.content.startsWith(prefix) ||
			message.author.bot ||
			message.channel.type == 'dm'
		)
			return;

		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		try {
			client.commands.get(command).execute(message, args, Discord);
		} catch {
			message.channel.send(
				'Please use a valid command :slight_smile:\nTo see the list of valid commands use `cm!help`'
			);
		}
	});
	//logging in
	botLogHandler.log('debug', 'Validating environment variables');
	await client.login(process.env.BOT_TOKEN);
})();
