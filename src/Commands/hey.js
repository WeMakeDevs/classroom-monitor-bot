const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');

const Hey = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('sends a hey message'),

	run: async (interaction) => {
		try {
			await interaction.editReply({
				content:
					'Hey 👋, Nice to meet you! Call me `cm!help` if you need any kind of help 😊',
			});
		} catch (error) {
			botErrorHandler.log('hey command', error);
		}
	},
};
module.exports = { Hey };
