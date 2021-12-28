const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const { botErrorHandler } = require('./botErrorHandler');

const loadCommands = async () => {
	try {
		const loadedCommands = fs
			.readdirSync('./src/Commands')
			.filter((file) => file.endsWith('.js'));

		//removing unnecessary commands
		//TODO: TO MOVE THESE COMMANDS SOMEWHRE ELSE
		// for (let i = 0; i < loadedCommands.length; i++) {
		// 	if (
		// 		loadedCommands[i] == 'command.js' ||
		// 		'presence.js' ||
		// 		'restricedWords.js'
		// 	) {
		// 		loadedCommands.splice(i, 1);
		// 	}
		// }

		for (const file of loadedCommands) {
			const command = require(`../Commands/${file}`);
			// console.log(command.name);
			client.commands.set(command.name, command);
		}
		return true;
	} catch (error) {
		botErrorHandler('loadCommand util', error);
		return false;
	}
};
module.exports = { loadCommands };
