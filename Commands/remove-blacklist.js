const { DatabaseService } = require('../services/database.service');
const { prefix, adminRole } = require('../config.json');

module.exports = async function (message) {
	const dbService = new DatabaseService();
	if (!message.member.roles.cache.some((role) => role.name === adminRole)) {
		message.reply('You are not authorized to do that');
	}
	let args = message.content.slice(prefix.length).trim().split(' ');
	args.shift();
	args = args.map((el) => el.toLowerCase());

	const deleteSuccess = await dbService.removeArrayFromBlacklist(
		message.channel.id,
		args
	);

	if (!deleteSuccess) {
		message.reply('Something went wrong when updating the blacklist');
		return;
	}

	message.reply('Removed Words from blacklist successfully');
};
