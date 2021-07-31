const { Message } = require('discord.js');
const { DatabaseService } = require('../services/database.service');

function handleConfiguration(client) {
	const dbService = new DatabaseService();

	client.on('message', async (message) => {
		const id = message.channel.id;
		const config = await dbService.getConfiguration(id);
		console.log(config);
	});
}

module.exports = { handleConfiguration };
