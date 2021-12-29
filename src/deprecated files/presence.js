const { botErrorHandler } = require('./botErrorHandler');
/**
 *
 * @deprecated
 * this module is deprecated and will be removed in future.
 */
try {
	module.exports = async function (client) {
		client.user.setPresence({
			status: 'online',
			activity: {
				name: 'cm!help',
				type: 'LISTENING',
				url: 'https://github.com/commclassroom/classroom-monitor-bot',
			},
		});
	};
} catch (error) {
	botErrorHandler('Prescence module', error);
}
