const { meme } = require('memejs');
const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Meme = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('send a programmer humor meme'),

	run: async (interaction) => {
		try {
			await interaction.deferReply();
			let memeResponse = await meme('programmerhumor');
			const memeEmbed = new MessageEmbed();

			if (memeResponse.title) {
				memeEmbed.setTitle(memeResponse.title);
			}

			await interaction.editReply({ embeds: [memeEmbed] });
		} catch (error) {
			botErrorHandler('Help command', error);
		}
	},
};
module.exports = { Meme };

