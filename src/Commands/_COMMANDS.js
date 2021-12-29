const { DSA } = require('./DSA');
const { Help } = require('./help');
const { Hey } = require('./hey');
const { Links } = require('./links');
const { Meme } = require('./meme');

const CommandList = [DSA, Help, Hey, Links, Meme];

module.exports = { CommandList };
