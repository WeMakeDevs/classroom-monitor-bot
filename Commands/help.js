module.exports = {
	name: 'help',
	description: 'sends the help command',
	execute(message, args, Discord) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#2e97c2')
			.setTitle('Community monitor for help')
			.setURL('https://github.com/kaiwalyakoparkar/classroom-monitor-bot')
			.setAuthor(
				'Classroon monitor',
				'https://i.imgur.com/yMCOBLH.png',
				'https://discord.js.org'
			)
			.setDescription(
				'Quality Education. Free For All. Forever.'
				)
			.addFields(
				{
				name: 'Current Supported Commands',
				value: '`hey`, `help`,`version`,`links`,`translate`,`meme`,`source`',
			}
			)
			.setTimestamp()
			.setFooter(
				'Want help? Classroom monitor is just `cm!help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);
		message.channel.send(helpEmbed);
	},
};
