const { translate } = require('bing-translate-api');

module.exports = {
    name: 'translate',
    desc: 'Translate a message to English',
    async execute(message) {

        if (message.author.bot) return;

        let args = message.content.replace("cm!translate ","");

        translate(args, null, 'en', true).then(res => {
            if (res.translation == 'cm!translate')
                message.channel.send("Please provide the text to translate");
            else if (res.translation == args) 
                message.channel.send("The text is already in English or I can't understand what language it is\nNote: I can't Understands languages such as Hindi or Japnaneese in Latin Alphabet.");
            else
                message.channel.send(res.translation);
          }).catch(err => {
            message.channel.send("Sorry, I had an error :(");
            console.error(err);
          });
    },
}