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
				'https://github.com/commclassroom/classroom-monitor-bot'
			);
			helpEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://i.imgur.com/yMCOBLH.png',
			});
			helpEmbed.addFields({
				name: 'Current Supported Commands',
				value: '`hey`, `help`,`version`,`links`,`translate`,`meme`,`source`',
			});

			helpEmbed.setDescription('Quality Education. Free For All. Forever.');
			helpEmbed.setTimestamp();

			helpEmbed.setFooter(
				'Want help? Classroom monitor is just `/help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);

			await interaction.editReply({ embeds: [helpEmbed] });
		} catch (error) {
			botErrorHandler('Help command', error);
		}
	},
};

module.exports = { Help };
