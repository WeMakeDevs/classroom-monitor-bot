//Importing discord libraries
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const command = require('./Commands/command.js');
const hey = require('./Commands/hey.js');


client.on('ready', () => {

    console.log(
		`Classroom Monitor is currently running on version v${
			require('./package.json').version
		}`
	);

    command(client,'hey', message => {
        hey(message);
    });
    
});

client.login(process.env.BOT_TOKEN);
