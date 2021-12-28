const { botLogHandler } = require('./botLogHandler');

const validateEnv = () => {
	if (!process.env.BOT_TOKEN) {
		return { valid: false, message: 'Missing discord bot token!' };
	}
	return { valid: true, message: 'Environment variables validated!' };
};
module.exports = { validateEnv };
