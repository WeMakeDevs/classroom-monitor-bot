const { DatabaseService } = require('../services/database.service');
const { prefix } = require('../config.json');

function handleConfiguration(client) {
	const dbService = new DatabaseService();

	client.on('message', async (message) => {
		if (message.content.includes(prefix)) return;
		if (message.author.bot) return;
		const id = message.channel.id;
		const config = await dbService.getConfiguration(id);
		if (!config) return;
		const blackList = config.blacklist;
		if (
			blackList.some((substring) =>
				message.content.toLowerCase().includes(substring)
			)
		) {
			message.delete();
			const msg = await message.reply(
				'You used a blacklisted word in this channel. Your message got deleted'
			);
			msg.delete({ timeout: 10000 });
		}
	});
}

module.exports = { handleConfiguration };
