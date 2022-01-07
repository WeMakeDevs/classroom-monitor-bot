const fs = require('fs');

const { botErrorHandler } = require('../utils/botErrorHandler');

/**
 *
 * @deprecated
 * this module is deprecated and will be removed in future.
 */
const loadCommands = async () => {
	try {
		//FIXME: this was supposed to set commands globally here only but if i do client.commands.set here it goes undefined if i try to get it in index.js currently this is returning the command array
		const loadedCommands = fs
			.readdirSync('./src/Commands')
			.filter((file) => file.endsWith('.js'));

		//removing unnecessary commands
		//TODO: fix this temporary patch , remove command,presence,restricted words from command dir
		// for (let i = 0; i < loadedCommands.length; i++) {
		// 	if (
		// 		loadedCommands[i] == 'command.js' ||
		// 		'presence.js' ||
		// 		'restricedWords.js'
		// 	) {
		// 		loadedCommands.splice(i, 1);
		// 	}
		// }

		// for (const file of loadedCommands) {
		// 	const command = require(`../Commands/${file}`);
		// 	client.commands.set(command.name, command);
		// }

		return loadedCommands;
	} catch (error) {
		botErrorHandler('loadCommand util', error);
		return false;
	}
};
module.exports = { loadCommands };
