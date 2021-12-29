const { DSA } = require('./DSA');
const { Help } = require('./help');
const { Hey } = require('./hey');
const { Links } = require('./links');

const CommandList = [DSA, Help, Hey, Links];

module.exports = { CommandList };
