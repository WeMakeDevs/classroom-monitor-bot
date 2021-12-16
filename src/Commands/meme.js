const { meme } = require('memejs');
const { botErrorHandler } = require('../utils/botErrorHandler');

try {
	module.exports = {
		name: 'meme',
		desc: 'send a programmer humor meme',
		async execute(message, args, Discord) {
			try {
				let memeResponse = await meme('programmerhumor');

				let memeEmbed = new Discord.MessageEmbed().setImage(memeResponse.url);
				if (memeResponse.title) memeEmbed.setTitle(memeResponse.title);
				message.channel.send(memeEmbed);
			} catch (err) {
				console.log(err.message);
				message.channel.send('I had an error :(');
			}
		},
	};
} catch (error) {
	botErrorHandler('meme command', error);
}
