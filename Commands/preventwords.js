const words = ['bro','dude','guys','bruh','women','gay','lesbian','guy','guyz','men','man']
const pronouns = ['he','she','him','his','her']
module.exports = (client, callback) => {
    client.on('message', message => {
        for (var i=0; i < words.length; i++) {
            if(message.content.toLowerCase().split(" ").includes(words[i])) {
                message.reply('This might not be inclusive or welcoming language. Please consider the following suggestions instead: use people, persons, folks, peeps');
            }
        }
        for (var l=0; l <pronouns.length; l++) {
            if(message.content.toLowerCase().split(" ").includes(pronouns[l])){
                message.reply('Please consider the following suggestions instead:he may be insensitive, use they, it instead');
            }
        }
    });
};

