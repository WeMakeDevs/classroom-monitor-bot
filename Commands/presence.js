module.exports = async function (client) {
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'cm!help',
            type: 'LISTENING',
            url: 'https://github.com/commclassroom/classroom-monitor-bot.',
        },
    });
}
