const Discord = require('discord.js');
const warnEmbed = new Discord.MessageEmbed()
    .setColor('#f44336')
    .setTitle('Community monitor warning you!!')
    .setURL('https://github.com/kaiwalyakoparkar/classroom-monitor-bot')
    .setAuthor(
        'Classroon monitor',
        'https://i.imgur.com/yMCOBLH.png',
        'https://discord.js.org'
    )
    .addFields(
        {
            name: 'Hey you were found using non inclusive language. Kindly use inclusive language and include everyone in the conversation.',
            value: 'If it was mistake by me, contact community moderator :)',
        }
    )
    .setTimestamp()
    .setFooter(
        'Want help? Classroom monitor is just `cm!help` far',
        'https://i.imgur.com/yMCOBLH.png'
    );

const words = [
    'guyz',
    'guy',
    'guyzz',
    'guys',
    'girls',
    'girl',
    'bruh',
    'duude',
    'women',
    'sir',
    'sirr',
    'man',
    'fellas',
    'madam',
    'maam',
    "ma'am",
    'yessir',
    'chad',
    'simp',
    'mate',

]
module.exports = (client, callback) => {
    client.on('message', message => {
        for (var i=0; i < words.length; i++) {
            if(message.content.toLowerCase().includes(words[i])) {
                message.reply('Please do not use non inclusive language . If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️. ');
                
                
               
            }
        }
    });
};


