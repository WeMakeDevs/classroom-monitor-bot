const { Configuration } = require('../schemas/config');

class DatabaseService {
	constructor() {}
	async getConfiguration(channelId) {
		let config;

		try {
			config = await Configuration.findById(channelId);
		} catch (error) {
			throw new Error('Couldnt retrieve Configuration');
		}
		return config;
	}
}

module.exports.DatabaseService = DatabaseService;
