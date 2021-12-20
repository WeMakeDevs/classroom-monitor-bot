const { prefix } = require('../../config.json');
const { botErrorHandler } = require('../utils/botErrorHandler');
try {
	module.exports = (client, aliases, callback) => {
		if (typeof aliases === 'string') {
			aliases = [aliases];
		}

		client.on('message', (message) => {
			const { content } = message;

			aliases.forEach((alias) => {
				const command = `${prefix}${alias}`;

				if (content.startsWith(`${command}`) || content === command) {
					console.log(`Running the command ${command}`);
					callback(message);
				}
			});
		});
	};
} catch (error) {
	botErrorHandler('Commands module', error);
}
