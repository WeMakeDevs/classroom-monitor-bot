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
	async addArrayToBlacklist(channelID, array) {
		try {
			await Configuration.findOneAndUpdate(
				{
					_id: channelID,
				},
				{ $addToSet: { blacklist: { $each: array } } },
				{ upsert: true, new: true, useFindAndModify: false }
			);
			return true;
		} catch (error) {
			return false;
		}
	}

	async removeArrayFromBlacklist(channelID, array) {
		try {
			await Configuration.findOneAndUpdate(
				{
					_id: channelID,
				},
				{ $pullAll: { blacklist: array } },
				{ new: true, useFindAndModify: false }
			);
			return true;
		} catch (error) {
			return false;
		}
	}
}

module.exports.DatabaseService = DatabaseService;
