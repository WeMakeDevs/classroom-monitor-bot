const { botErrorHandler } = require('../utils/botErrorHandler');
try {
	module.exports = {
		name: 'source',
		description: `Sends a link to the bot's source code`,

		execute(message, args, Discord) {
			const linkEmbed = new Discord.MessageEmbed()
				.setColor('#2e97c2')
				.setTitle('Community Classroom Discord bot')
				.setURL('https://github.com/commclassroom/classroom-monitor-bot')
				.setAuthor(
					'Classroon Monitor',
					'https://i.imgur.com/yMCOBLH.png',
					'https://discord.js.org'
				)
				.setDescription(
					'Open Source Discord bot made by and for ✨Community Classroom✨'
				)
				.addFields({
					name: 'GitHub',
					value: 'https://github.com/commclassroom/classroom-monitor-bot',
				})
				.setTimestamp()
				.setFooter(
					'Want help? Classroom monitor is just `cm!help` far',
					'https://i.imgur.com/yMCOBLH.png'
				);
			message.channel.send(linkEmbed);
		},
	};
} catch (error) {
	botErrorHandler('Source command', error);
}
