const { botErrorHandler } = require('../utils/botErrorHandler');
try {
	module.exports = async function (client) {
		client.user.setPresence({
			status: 'online',
			activity: {
				name: 'cm!help',
				type: 'LISTENING',
				url: 'https://github.com/WeMakeDevs/classroom-monitor-bot',
			},
		});
	};
} catch (error) {
	botErrorHandler('Prescence module', error);
}
