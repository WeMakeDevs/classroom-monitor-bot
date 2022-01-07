const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Version = {
	data: new SlashCommandBuilder()
		.setDescription('sends the current version of the bot')
		.setName('version'),

	run: async (interaction) => {
		try {
			await interaction.deferReply();
			const versionEmbed = new MessageEmbed();
			const version = require('../../package.json').version;
			versionEmbed.setTitle(`Current version of bot is ${version}`);

			await interaction.editReply({ embeds: [versionEmbed] });
		} catch (error) {
			botErrorHandler('Help command', error);
		}
	},
};
module.exports = { Version };