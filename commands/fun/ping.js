const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		let latency = Date.now() - interaction.createdTimestamp;
		await interaction.reply(latency + 'ms');
	},
};
