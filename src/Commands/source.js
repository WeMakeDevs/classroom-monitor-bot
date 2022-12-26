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
			sourceEmbed.setTitle('WeMakeDevs Discord bot');
			sourceEmbed.setURL(
				'https://github.com/WeMakeDevs/classroom-monitor-bot'
			);
			sourceEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg',
			});
			sourceEmbed.setDescription(
				'Open Source Discord bot made by and for ✨WeMakeDevs✨'
			);
			sourceEmbed.addFields({
				name: 'GitHub',
				value: 'https://github.com/WeMakeDevs/classroom-monitor-bot',
			});
			sourceEmbed.setTimestamp();
			sourceEmbed.setFooter(
				'Want help? Classroom monitor is just `cm!help` far',
				'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg'
			);
			await interaction.editReply({ embeds: [sourceEmbed] });
		} catch (error) {
			botErrorHandler('source command', error);
		}
	},
};

module.exports = { Source };

