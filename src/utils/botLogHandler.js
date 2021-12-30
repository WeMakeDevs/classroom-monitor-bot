const { createLogger, format, transports, config } = require('winston');

const { combine, timestamp, colorize, printf } = format;

/**
 * Standard log handler, using winston to wrap and format
 * messages. Call with `logHandler.log(level, message)`.
 *
 * levels - https://github.com/winstonjs/winston#using-logging-levels
 *
 * @param {string} level - The log level to use.
 * @param {string} message - The message to log.
 */

/*
logging precedency summary
error: 0,
warn: 1,   
info: 2,           ↑
http: 3,      level of log 
verbose: 4,        ↓
debug: 5,
silly: 6

*/
const botLogHandler = createLogger({
	levels: config.npm.levels,
	level: 'silly',
	transports: [new transports.Console()],
	format: combine(
		timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		colorize(),
		printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
	),
	exitOnError: false,
});
module.exports = { botLogHandler };
