const { botErrorHandler } = require('../utils/botErrorHandler');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Links = {
	data: new SlashCommandBuilder()
		.setName('links')
		.setDescription(`Sends all Community Classroom's socials`),

	run: async (interaction) => {
		try {
			await interaction.deferReply();
			const LinkEmbed = new MessageEmbed();
			LinkEmbed.setColor('#2e97c2');
			LinkEmbed.setTitle('Community monitor for help');
			LinkEmbed.setURL(
				'https://github.com/commclassroom/classroom-monitor-bot'
			);
			LinkEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://i.imgur.com/yMCOBLH.png',
			});
			LinkEmbed.addFields(
				{
					name: 'LinkedIn',
					value: 'https://www.linkedin.com/company/commclassroom/',
				},
				{
					name: 'Twitter',
					value: 'https://twitter.com/commclassroom/',
				},
				{
					name: 'Instagram',
					value: 'https://www.instagram.com/commclassroom/',
				},
				{
					name: 'YouTube',
					value: 'https://www.youtube.com/c/KunalKushwaha/',
				},
				{
					name: 'Discord Invite',
					value: 'https://discord.gg/commclsassroom',
				},
				{
					name: 'Telegram Invite',
					value: 'https://t.me/commclassroom',
				}
			);
			LinkEmbed.setDescription('Quality Education. Free For All. Forever.');
			LinkEmbed.setTimestamp();
			LinkEmbed.setFooter(
				'Want help? Classroom monitor is just `/help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);

			await interaction.editReply({ embeds: [LinkEmbed] });
		} catch (error) {
			botErrorHandler('Help command', error);
		}
	},
};
module.exports = { Links };

