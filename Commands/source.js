module.exports = {
	name: 'source',
	description: 'sends the source code of the bot',
	execute(message, args, Discord) {
		const linkEmbed = new Discord.MessageEmbed()
			.setColor('#2e97c2')
			.setTitle('Community Classroom Discord bot')
			.setURL('https://github.com/commclassroom/classroom-monitor-bot')
			.setAuthor(
				'Classroon monitor',
				'https://i.imgur.com/yMCOBLH.png',
				'https://discord.js.org'
			)
			.setDescription(
				'Open source discord bot made for ✨Community Classroom✨'
			)
			.addFields(
				{
				name: 'Github',
				value: 'https://github.com/commclassroom/classroom-monitor-bot',
			}
			)
			.setTimestamp()
			.setFooter(
				'Want help? Classroom monitor is just `cm!help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);
		message.channel.send(linkEmbed);
	},
};
