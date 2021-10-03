const Discord = require('discord.js');
const alexjs = require('alex')
const config = require('../config.json').alexjs
const warnEmbed = new Discord.MessageEmbed()
    .setColor('#f44336')
    .setTitle('Community monitor warning you!!')
    .setURL('https://github.com/kaiwalyakoparkar/classroom-monitor-bot')
    .setAuthor(
        'Classroom Monitor',
        'https://i.imgur.com/yMCOBLH.png',
        'https://discord.js.org'
    )
    .addFields(
        {
            name: 'Hey you were found violating server rules ⚠️. Kindly follow #rules else this might lead to strict actions against you. 🚨',
            value: 'If it was mistake by me, contact community moderator :)',
        }
    )
    .setTimestamp()
    .setFooter(
        'Want help? Classroom monitor is just `cm!help` far',
        'https://i.imgur.com/yMCOBLH.png'
    );

const words = [
    'cfc',
    'code for cause',
    'anuj',
    'ganga',
    'codeforcause',
    'pepcoding',
    'pep coding',
    'codedamn',
    'codingblocks',
    'coding blocks',
    'byjus',
    `byju's`,
    'white hat jr',
    'white hat junior',
    'whitehatjunior'
]

module.exports = (client, callback) => {
    client.on('message', message => {
        for (let i = 0; i < words.length; i++) {
            if (message.content.toLowerCase().includes(words[i])) {
                message.author.send('Please do not talk about other edTech startups here 🚫. If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️. ');
                message.author.send(warnEmbed);
                message.delete();
                break;
            }
        }

        if (alexjs.markdown(message.content, config).messages.length) {
            message.channel.send('Please do not use profane language 🚫. If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️.', warnEmbed);
            return;
        }
    });
};

