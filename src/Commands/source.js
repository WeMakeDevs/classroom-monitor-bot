const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Source = {
	data: new SlashCommandBuilder()
		.setName('source')
		.setDescription(`Sends a link to the bot's source code`),

	run: async (interaction) => {
		try {
			await interaction.deferReply();
			const sourceEmbed = new MessageEmbed();
			sourceEmbed.setColor('#2e97c2');
			sourceEmbed.setTitle('Community Classroom Discord bot');
			sourceEmbed.setURL(
				'https://github.com/commclassroom/classroom-monitor-bot'
			);
			sourceEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://i.imgur.com/yMCOBLH.png',
			});
			sourceEmbed.setDescription(
				'Open Source Discord bot made by and for ✨Community Classroom✨'
			);
			sourceEmbed.addFields({
				name: 'GitHub',
				value: 'https://github.com/commclassroom/classroom-monitor-bot',
			});
			sourceEmbed.setTimestamp();
			sourceEmbed.setFooter(
				'Want help? Classroom monitor is just `cm!help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);
			await interaction.editReply({ embeds: [sourceEmbed] });
		} catch (error) {
			botErrorHandler('source command', error);
		}
	},
};

module.exports = { Source };

