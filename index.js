//Importing important libraries

const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

//Command inclusion

const command = require('./Commands/command.js');
const hey = require('./Commands/hey.js');
const version = require('./Commands/version.js');
const help = require('./Commands/help.js');
const links = require('./Commands/links.js');
const prevent = require('./Commands/preventwords.js');
const restrict = require('./Commands/restrictedWords.js');

// Up commands

client.on('ready', () => {

    console.log(
		`Classroom Monitor is currently running on version v${
			require('./package.json').version
		}`
	);

    //Hey Command
    command(client,'hey', message => {
        hey(message);
    });

    //Version Command
    command(client,'version', message => {
        version(message);
    });

    //Help Command
    command(client, 'help', message => {
    	message.channel.send(help);
    });

    //Links Command
    command(client, 'links', message => {
    	message.channel.send(links);
    });
    prevent(client, message => {});
    restrict(client, message => {});
});

// Authentications

client.login(process.env.BOT_TOKEN);
