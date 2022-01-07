const { translate } = require('bing-translate-api');
const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Translate = {
	data: new SlashCommandBuilder()
		.setName('translate')
		.setDescription(
			'Translate a message to English. Select the translate option and add the message to translate'
		)
		.addStringOption((option) =>
			option.setName('translate').setDescription('enter a message to translate')
		),
	run: async (interaction) => {
		try {
			const string = interaction.options.getString('translate');
			if (!string.length) {
				interaction.reply({
					content:
						'Please provide the text to translate\nFormat: `cm!translate こんにちは',
				});
				return;
			}
			try {
				await interaction.deferReply();
				let res = await translate(string, null, 'en', true);
				let TranslateEmbed = new MessageEmbed();
				TranslateEmbed.setTitle(res.translation);
				await interaction.editReply({ embeds: [TranslateEmbed] });
			} catch (error) {
				interaction.reply({
					content: 'Sorry I had an error ;(',
				});

				console.log(error);
			}
		} catch (error) {
			botErrorHandler('translate command', error);
		}
	},
};

module.exports = { Translate };
