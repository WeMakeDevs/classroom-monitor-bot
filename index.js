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

// Up commands

const commandFiles = fs
	.readdirSync('./Commands/')
	.filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}

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
		(!message.content.startsWith(prefix)) || message.author.bot || message.channel.type == 'dm'
	)
return;
		
		console.log()

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	try {
		client.commands.get(command).execute(message, args, Discord);
	} catch {
		message.channel.send("Please use a valid command :slight_smile:\nTo see the list of valid commands use `cm!help`")
	}
});

// Authentications

client.login(process.env.BOT_TOKEN);
