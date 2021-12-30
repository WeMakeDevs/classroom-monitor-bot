const { botLogHandler } = require('../utils/botLogHandler');

/**
 * Takes the error object generated within the code and logs the
 * information in the console.
 * @param  context The string explaining where this error was thrown.
 * @param  err The standard error object (generated in a catch statement).
 */

const botErrorHandler = async (context, err) => {
	const error = err;
	botLogHandler.log('error', `There was an error in the ${context}:`);
	botLogHandler.log(
		'error',
		JSON.stringify({ errorMessage: err.message, errorStack: err.stack })
	);
};
module.exports = { botErrorHandler };
