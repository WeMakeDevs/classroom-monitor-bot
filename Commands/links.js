const Discord = require('discord.js');
const linkEmbed = new Discord.MessageEmbed()
	.setColor('#2e97c2')
	.setTitle('Community Classroom Social accounts')
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
			name: 'Youtube',
			value: 'https://www.youtube.com/c/KunalKushwaha/',
		},
		{
			name: 'Discord Invite',
			value: 'https://discord.io/commclassroom',
		},
		{
			name: 'Telegram Invite',
			value: 'https://t.me/commclassroom',
		},
		{
			name: 'Become University Leader',
			value: 'https://docs.google.com/forms/d/e/1FAIpQLSdoqRVp9t8-J8i87-T2Nv9XSfSViyf750VJXtxHRYkv7FTNEA/viewform',
		}
	)
	.setTimestamp()
	.setFooter(
		'Want help? Classroom monitor is just `cm!help` far',
		'https://i.imgur.com/yMCOBLH.png'
	);

module.exports = linkEmbed;
