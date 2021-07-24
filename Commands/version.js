module.exports = async function (message) {
    message.reply(` your monitor is running on version v${require('../package.json').version}`);    
}