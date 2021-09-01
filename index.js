//Importing important libraries

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix } = require('./config.json');

require('dotenv').config();
client.commands = new Discord.Collection();

//Command inclusion

const presence = require('./Commands/presence.js');
const restrict = require('./Commands/restrictedWords.js');

const commandFiles = fs
	.readdirSync('./Commands/')
	.filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}

// Up commands

client.on('ready', () => {
	console.log(
		`Classroom Monitor is currently running on version v${
			require('./package.json').version
		}`
	);

	//Bot Status
	presence(client);
	restrict(client, (message) => {});
});

client.on('message', (message) => {
	if (
		!message.content.startsWith(prefix) ||
		message.author.bot ||
		message.channel.type == 'dm'
	)
		return;

	const args = message.content.slice(prefix.length).split(/ +/); // takes the args which are after the command, we'll need args for commands like translate
	const command = args.shift().toLowerCase();

	try {
		client.commands.get(command).execute(message, args, Discord);
		console.log(args);
	} catch {
		message.channel.send('Please use a valid command :slight_smile:');
	}
});

// Authentications

client.login(process.env.BOT_TOKEN);
