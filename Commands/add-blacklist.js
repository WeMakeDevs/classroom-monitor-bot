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
	const createSuccess = await dbService.addArrayToBlacklist(
		message.channel.id,
		args
	);

	if (!createSuccess) {
		message.reply('Something went wrong when Creating the blacklist');
		return;
	}

	message.reply('Added Words to blacklist successfully');
};
