const Discord = require('discord.js');
const alexjs = require('alex');
const config = require('../../config.json').alexjs;
const { botErrorHandler } = require('../utils/botErrorHandler');

const warnEmbed = new Discord.MessageEmbed()
	.setColor('#f44336')
	.setTitle('Community monitor warning you!!')
	.setURL('https://github.com/WeMakeDevs/classroom-monitor-bot')
	.setAuthor(
		'Classroom Monitor',
		'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg',
		'https://discord.js.org'
	)
	.addFields({
		name: 'Hey you were found violating server rules ⚠️. Kindly follow #rules else this might lead to strict actions against you. 🚨',
		value: 'If it was mistake by me, contact community moderator :)',
	})
	.setTimestamp()
	.setFooter(
		'Want help? Classroom monitor is just `cm!help` far',
		'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg'
	);

const words = [
	'cfc',
	'code for cause',
	'anuj',
	'ganga',
	'codeforcause',
	'pepcoding',
	'pep coding',
	'codedamn',
	'codingblocks',
	'coding blocks',
	'byjus',
	`byju's`,
	'white hat jr',
	'white hat junior',
	'whitehatjunior',
	'edtech startup',
	'edtech startups',
	'edtechstartup',
	'edtechstartups',
	'edtech_startup',
	'edtech_startups',
];

const csgo_scam =
	'hello! i leave from cs:go and give all my inventory, the first three who send a trade';
const discord_scam1 =
	'Yo, friend gave me a referral link to get Discord nitro for free';
const discord_scam2 = 'Discord Nitro for Free - Steam Store';
const discord_scam3 = '3 months of Discord Nitro free from STEAM';
const discord_scam4 = 'Free 3 months Discord Nitro';

try {
	module.exports = (client, callback) => {
		client.on('message', (message) => {
			for (let i = 0; i < words.length; i++) {
				if (message.content.toLowerCase().includes(words[i])) {
					warningMessage =
						'Please do not talk about other edTech startups here 🚫. If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️. ';
					message.author.send(warningMessage);
					message.delete();
					break;
				}
			}

			if (alexjs.markdown(message.content, config).messages.length) {
				warningMessage = `🚫⚠️ ${
					alexjs.markdown(message.content, config).messages[0].reason
				}. Please update your message accordingly 🚫⚠️`;
				message.reply(warningMessage);
				return;
			} else if (
				message.content.toLowerCase().substring(0, 86) === csgo_scam ||
				message.content.toLowerCase().substring(0, 65) === discord_scam1 ||
				message.content.toLowerCase().substring(0, 37) === discord_scam2 ||
				message.content.toLowerCase().substring(0, 42) === discord_scam3 ||
				message.content.toLowerCase().substring(0, 28) === discord_scam4
			) {
				message.delete();
			}
		});
	};
} catch (error) {
	botErrorHandler('Restricted words module', error);
}
