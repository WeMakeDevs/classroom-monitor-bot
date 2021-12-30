//Importing important libraries

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix } = require('./config.json');

require('dotenv').config();
client.commands = new Discord.Collection();
//Command inclusion

const presence = require('./src/Commands/presence');
const restrict = require('./src/Commands/restrictedWords');
const { botLogHandler } = require('./src/utils/botLogHandler');

// Up commands
botLogHandler.log('debug', 'setting commands');
const commandFiles = fs
	.readdirSync('./src/Commands/')
	.filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./src/Commands/${file}`);

	client.commands.set(command.name, command);
}
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

// Authentications
botLogHandler.log('debug', 'Validating environment variables');
client.login(process.env.BOT_TOKEN);
