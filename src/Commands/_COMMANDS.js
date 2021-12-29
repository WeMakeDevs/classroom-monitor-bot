const { DSA } = require('./DSA');
const { Help } = require('./help');
const { Hey } = require('./hey');

const CommandList = [DSA, Help, Hey];

module.exports = { CommandList };
