const words = [
    'cfc',
    'code for cause',
    'anuj',
    'ganga'
]

module.exports = (client, callback) => {
    client.on('message', message => {

        for (var i=0; i < words.length; i++) {
            if(message.content.toLowerCase().includes(words[i])) {
                message.reply('Please do not talk about other edTech startups here 🚫. If you think I did a mistake dont worry I am still under development, tag Community Manager and report this 🏷️. ');
                message.author.send(`Hey you just violated server rules. Kindly follow #rules else this might lead to strict actions against you.`);
            }
        }

    });
};
