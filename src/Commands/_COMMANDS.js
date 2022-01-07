const { DSA } = require('./DSA');
const { Help } = require('./help');
const { Hey } = require('./hey');
const { Links } = require('./links');
const { Meme } = require('./meme');
const { Source } = require('./source');
const { Translate } = require('./translate');
const { Version } = require('./version');

/**
 * The list of all available commands.
 * this is used to push tne commands globally.
 * */
const CommandList = [DSA, Help, Hey, Links, Meme, Source, Translate, Version];

module.exports = { CommandList };
