module.exports = {
	name: 'version',
	description: 'sends the version of bot',
	execute(message, args, Discord) {
		message.reply(
			` your monitor is running on version v${
				require('../package.json').version
			}`
		);
	},
};

// module.exports = async function (message) {
//     message.reply(` your monitor is running on version v${require('../package.json').version}`);
// }
