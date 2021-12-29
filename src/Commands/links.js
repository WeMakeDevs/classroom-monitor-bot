const { botErrorHandler } = require('../utils/botErrorHandler');

try {
	module.exports = {
		name: 'links',
		description: `Sends all Community Classroom's socials`,
		execute(message, args, Discord) {
			const linkEmbed = new Discord.MessageEmbed()
				.setColor('#2e97c2')
				.setTitle('Community Classroom Social accounts')
				.setURL('https://github.com/commclassroom/classroom-monitor-bot')
				.setAuthor(
					'Classroom Monitor',
					'https://i.imgur.com/yMCOBLH.png',
					'https://discord.js.org'
				)
				.setDescription('Quality Education. Free For All. Forever.')
				.addFields(
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
				)
				.setTimestamp()
				.setFooter(
					'Want help? Classroom Monitor is just `cm!help` far',
					'https://i.imgur.com/yMCOBLH.png'
				);
			message.channel.send(linkEmbed);
		},
	};
} catch (error) {
	botErrorHandler('Link command', error);
}
