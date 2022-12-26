
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { botErrorHandler } = require('../utils/botErrorHandler');

const DSA = {
	/**
	 * //V12 interface
  // name:string;
  // description:string;
  // run:(message: Message)=>Promise<void> //This means your function will be asynchronous (this is important later) and does not return a value.
  //v13
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
  TS
	 */
	data: new SlashCommandBuilder()
		.setName('dsa')
		.setDescription('Sends the link for the DSA course'),

	run: async (interaction) => {
		try {
			await interaction.deferReply(); //https://discordjs.guide/interactions/replying-to-slash-commands.html#editing-responses
			const linkEmbed = new MessageEmbed();
			linkEmbed.setColor('#2e97c2');
			linkEmbed.setTitle('WeMakeDevs DSA course details');
			linkEmbed.setURL(
				'https://github.com/WeMakeDevs/classroom-monitor-bot'
			);
			/**@deprecated — Supply a lone object of interface EmbedAuthorData instead of more parameters.the signature '(name: string, iconURL?: string, url?: string): MessageEmbed' of 'linkEmbed.setAuthor' is deprecated.ts(6387) */
			linkEmbed.setAuthor({
				name: "'Classroon Monitor'",
				url: 'https://discord.js.org/',
				iconURL: 'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg',
			});

			linkEmbed.setDescription('Quality Education. Free For All. Forever.');
			linkEmbed.addFields(
				{
					name: 'Complete Java + DSA course',
					value:
						'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
				},
				{
					name: 'Code sample and full syllabus for DSA lectures',
					value: 'https://github.com/kunal-kushwaha/DSA-Bootcamp-Java',
				},
				{
					name: 'Try hands on Git',
					value: 'https://github.com/kunal-kushwaha/commclassroomOP',
				}
			);
			linkEmbed.setTimestamp();
			linkEmbed.setFooter(
				'Want help? Classroom monitor is just `/help` far',
				'https://user-images.githubusercontent.com/91791257/209436999-007b066a-01d9-490b-9bfd-3010e53d6954.jpg'
			);

			await interaction.editReply({ embeds: [linkEmbed] });
		} catch (error) {
			botErrorHandler('DSA module', error);
		}
	},
};

module.exports = { DSA };

