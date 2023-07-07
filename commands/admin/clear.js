const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Supprime les messages dans le channel')
        .addIntegerOption(option => option.setName('nombre').setDescription('Nombre de messages à supprimer').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.MANAGE_MESSAGES),
	async execute(interaction) {
		deleteCount = interaction.options.getInteger('nombre');
        if (!deleteCount || deleteCount < 1 || deleteCount > 100)
            return interaction.reply({ content: "Veuillez indiquer un nombre entre 1 et 100 pour le nombre de messages à supprimer.", ephemeral: true });
        const fetched = await interaction.channel.messages.fetch({ limit: deleteCount });
        interaction.channel.bulkDelete(fetched)
            .catch(error => interaction.reply({ content: `Impossible de supprimer les messages à cause de: ${error}`, ephemeral: true }));
        interaction.reply({ content: `J'ai supprimé **${deleteCount}** messages !`, ephemeral: true });
	},
};
