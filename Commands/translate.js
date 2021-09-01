const { translate } = require('bing-translate-api');

module.exports = {
	name: 'translate',
	description: 'Translate a message to English',
	async execute(message, args, Discord) {
		if (!args) message.channel.send('Please provide text to translate');
		else {
			try {
				let res = await translate(args.join(' '), null, 'en', true);
				if (res.translation == res.text)
					message.channel.send(
						"The text is either already in English or I can't understand what language it is\nNote: I can't Understand languages such as Hindi or Japanese in Latin Alphabet."
					);
				else message.channel.send(res.translation);
			} catch {
				message.channel.send('Sorry, I had an error :(');
				console.error(err);
			}
		}
	},
};
