const { MessageEmbed } = require('discord.js');
const alexjs = require('alex');
const config = require('../../config.json').alexjs;
const { botErrorHandler } = require('../utils/botErrorHandler');
/**
 *  checks the message contents and deletes the restricted word(s). sends a message embed
 * to the channel and personally.
 *   @param  message message object containing content of message,author id etc.
 */
const checkRestricted = async (message) => {
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
	];

	let csgo_scam =
		'hello! i leave from cs:go and give all my inventory, the first three who send a trade';
	let discord_scam1 =
		'Yo, friend gave me a referral link to get Discord nitro for free';
	let discord_scam2 = 'Discord Nitro for Free - Steam Store';
	let discord_scam3 = '3 months of Discord Nitro free from STEAM';
	let discord_scam4 = 'Free 3 months Discord Nitro';
	try {
		for (let i = 0; i < words.length; i++) {
			if (message.content.toLowerCase().includes(words[i])) {
				const warnEmbed = new MessageEmbed();
				warnEmbed.setColor('#f44336');
				warnEmbed.setTitle('Community monitor warning you!!');
				warnEmbed.setURL(
					'https://github.com/WeMakeDevs/classroom-monitor-bot'
				);
				warnEmbed.setAuthor({
					name: "'Classroon Monitor'",
					url: 'https://discord.js.org/',
					iconURL: 'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg',
				});
				warnEmbed.addFields({
					name: 'Hey you were found violating server rules ⚠️. Kindly follow #rules else this might lead to strict actions against you. 🚨',
					value: 'If it was mistake by me, contact community moderator :)',
				});
				warnEmbed.setTimestamp();
				warnEmbed.setFooter(
					'Want help? Classroom monitor is just `/help` far',
					'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg'
				);
				warnEmbed.setDescription(`You used the word ${words[i]} .

				Please do not talk about other edTech startups here 🚫. If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️.
				`);

				message.author.send({ embeds: [warnEmbed] });
				message.channel.send({ embeds: [warnEmbed] });
				message.delete();
				break;
			}
		}

		if (alexjs.markdown(message.content, config).messages.length) {
			warningMessage = `🚫⚠️ ${
				alexjs.markdown(message.content, config).messages[0].reason
			}. Please update your message accordingly 🚫⚠️`;
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
	} catch (error) {
		botErrorHandler('restricted words module', error);
	}
};

module.exports = { checkRestricted };
