const { translate } = require('bing-translate-api');

module.exports = {
	name: 'translate',
	desc: 'Translate a message to English',
	async execute(message, args, Discord) {
		if (!args.length) {
			message.channel.send(
				'Please provide the text to translate\nFormat: `cm!translate こんにちは`'
			);
		} else {
			let sentanceToTranslate = args.join(' '); // args will be words in an array so we will join them to make a sentance
			try {
				let res = await translate(sentanceToTranslate, null, 'en', true);

				if (!(res.translation.toLowerCase() == sentanceToTranslate)) {
					message.channel.send(res.translation);
				}
			} catch (err) {
				message.channel.send('Sorry I had an error ;(');
				console.error(err);
			}
		}
	},
};
