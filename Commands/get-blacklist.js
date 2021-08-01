const { DatabaseService } = require('../services/database.service');
const Discord = require('discord.js');
const { adminRole } = require('../config.json');

module.exports = async function (message) {
	const dbService = new DatabaseService();
	let config = null;
	if (!message.member.roles.cache.some((role) => role.name === adminRole)) {
		message.reply('You are not authorized to do that');
	}
	try {
		config = await dbService.getConfiguration(message.channel.id);
	} catch (error) {
		message.reply("Couldn't retrieve configuration from database");
	}

	if (!config) {
		message.reply('No Configuration found');
	}
	console.log(config.blacklist);
	const embed = new Discord.MessageEmbed()
		.setTitle('Blacklist')
		.setDescription('Blacklisted Words for this channel')
		.addField('Blacklisted word', `\`${config.blacklist}\``);
	message.channel.send(embed);
};
