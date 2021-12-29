const { botErrorHandler } = require('../utils/botErrorHandler');
const { CommandList } = require('../Commands/_COMMANDS');

/**
 * triggers when the onInteractionCreate event fires. checks the available commands
 * from root command file and runs according to command send to bot.
 *
 * @param  interaction interacton object
 */

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
