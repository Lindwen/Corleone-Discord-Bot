const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers-list')
        .setDescription('Liste les serveurs où le bot est présent')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        if (interaction.user.id === '199599741779050497') {
            const guilds = interaction.client.guilds.cache.map(guild => guild.name);
            await interaction.reply({content: `Je suis présent sur ${guilds.length} serveurs :\n🔹 ${guilds.join(`\n🔹 `)}`, ephemeral: true});
        }
        else {
            await interaction.reply({content: 'Vous n\'avez pas la permission d\'utiliser cette commande', ephemeral: true });
        }
    },
};
