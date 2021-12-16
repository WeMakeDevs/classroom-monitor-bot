module.exports = {
	name: 'version',
	description: 'sends the current version of the bot',
	execute(message, args, Discord) {
		message.reply(
			` your monitor is running on version v${
				require('../../package.json').version
			}`
		);
	},
};
