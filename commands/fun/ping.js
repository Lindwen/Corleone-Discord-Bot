const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répond avec le ping du bot avec l\'API Discord'),
	async execute(interaction) {
		let ping = Date.now() - interaction.createdTimestamp + " ms";
		await interaction.reply(`Pong! ${ping}`);
	},
};
