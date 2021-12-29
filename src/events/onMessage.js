const { checkRestricted } = require('../modules/restrictedWords');

const onMessage = async (message) => {
	await checkRestricted(message);
};
module.exports = { onMessage };
