const { checkRestricted } = require('../modules/restrictedWords');

/**
 * triggers when the onMessageCreate event fires.
 * handles the onMessage events.
 *
 * @param  message message object
 */

const onMessage = async (message) => {
	await checkRestricted(message);
};
module.exports = { onMessage };
