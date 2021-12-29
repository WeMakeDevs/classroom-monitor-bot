const { Interaction } = require('discord.js');
const { botErrorHandler } = require('../utils/botErrorHandler');

const onInteraction = async (interaction) => {
	try {
		if (interaction.isCommand()) {
			for (const Command of CommandList) {
				if (interaction.commandName === Command.data.name) {
					await Command.run(interaction);
					break;
				}
			}
		}
	} catch (err) {
		botErrorHandler('onInteraction event', err);
	}
};
module.exports = { onInteraction };
