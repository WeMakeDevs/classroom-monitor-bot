module.exports = {
	name: 'dsa',
	description: 'sends the link for the dsa course',
	execute(message, args, Discord) {
		const linkEmbed = new Discord.MessageEmbed()
			.setColor('#2e97c2')
			.setTitle('Community Classroom DSA course details')
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
					name: 'Complete Java + DSA course',
					value: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
				},
				{
					name: 'Code sample and full syllabus for DSA lectures',
					value: 'https://github.com/kunal-kushwaha/DSA-Bootcamp-Java',
				},
				{
					name: 'Try hands on git',
					value: 'https://github.com/kunal-kushwaha/commclassroomOP',
				}
			)
			.setTimestamp()
			.setFooter(
				'Want help? Classroom monitor is just `cm!help` far',
				'https://i.imgur.com/yMCOBLH.png'
			);
			message.channel.send(linkEmbed)
	},
};
