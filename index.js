const { Client } = require('discord.js');
require('dotenv').config();

const { IntentOptions } = require('./src/config/IntentOptions');
const { onInteraction } = require('./src/events/onInteraction');
const { botLogHandler } = require('./src/utils/botLogHandler');
const { validateEnv } = require('./src/utils/validateEnv');
const { onReady } = require('./src/events/onReady');

(async () => {
	botLogHandler.log('debug', 'Validating environment variables');
	const allEnvValidated = await validateEnv();
	if (!allEnvValidated.valid) {
		botLogHandler.log('error', allEnvValidated.message);
		return;
	}

	const client = new Client({
		intents: IntentOptions,
	});
	client.on('ready', async () => await onReady(client));
	client.on(
		'interactionCreate',
		async (interaction) => await onInteraction(interaction)
	);

	botLogHandler.log('debug', 'logging into discord');
	await client.login(process.env.BOT_TOKEN);
})();
