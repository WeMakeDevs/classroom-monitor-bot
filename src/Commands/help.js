const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Help = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('ends a list of valid commands (a.k.a. help command)'),

	run: async (interaction) => {
		try {
			await interaction.deferReply();
			const helpEmbed = new MessageEmbed();
			helpEmbed.setColor('#2e97c2');
			helpEmbed.setTitle('Community monitor for help');
			helpEmbed.setURL(
				'https://github.com/WeMakeDevs/classroom-monitor-bot'
			);
			helpEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg',
			});
			helpEmbed.addFields({
				name: 'Current Supported Commands',
				value: '`hey`, `help`,`version`,`links`,`translate`,`meme`,`source`',
			});

			helpEmbed.setDescription('Quality Education. Free For All. Forever.');
			helpEmbed.setTimestamp();

			helpEmbed.setFooter(
				'Want help? Classroom monitor is just `/help` far',
				'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg'
			);

			await interaction.editReply({ embeds: [helpEmbed] });
		} catch (error) {
			botErrorHandler('Help command', error);
		}
	},
};

module.exports = { Help };

