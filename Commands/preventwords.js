const words = ['bro','dude','guys','bruh','women','gay','lesbian','guy','guyz','men','man']
const pronouns = ['he','she','him','his','her']
// this is just a dictionary of words which are being inforced
const list = ['fuck','bitch','idiot','stupid','shit','bullshit','badass'];

module.exports = (client, callback) => {
    client.on('message', message => {
        for (var i=0; i < words.length; i++) {
            if(message.content.toLowerCase().split(" ").includes(words[i])) {
                message.reply('This might not be inclusive or welcoming language. Please consider the following suggestions instead: use people, persons, folks, peeps');
                break;
            }
        }
        for (var j=0; j < list.length; j++) {
            if(message.content.toLowerCase().split(" ").includes(list[j])){
                message.reply('Please do not use curse/profane words in this server ⛔');
                break;
            }
        }
        for (var l=0; l <pronouns.length; l++) {
            if(message.content.toLowerCase().split(" ").includes(pronouns[l])){
                message.reply('Please consider the following suggestions instead:he may be insensitive, use they, it instead');
                break;
            }
        }
    });
};

