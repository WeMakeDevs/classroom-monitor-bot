const { DSA } = require('./DSA');
const { Help } = require('./help');
const { Hey } = require('./hey');
const { Links } = require('./links');
const { Meme } = require('./meme');
const { Source } = require('./source');
const { Translate } = require('./translate');
const { Version } = require('./version');

const CommandList = [DSA, Help, Hey, Links, Meme, Source, Translate, Version];

module.exports = { CommandList };
