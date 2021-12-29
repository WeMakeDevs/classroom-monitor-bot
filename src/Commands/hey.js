const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');

const Hey = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('sends a hey message'),

	run: async (interaction) => {
		try {
			await interaction.reply({
				content:
					'Hey 👋, Nice to meet you! Call me `/help` if you need any kind of help 😊',
			});
		} catch (error) {
			botErrorHandler('hey command', error);
		}
	},
};
module.exports = { Hey };
