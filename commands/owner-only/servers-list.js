const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers-list')
        .setDescription('[Owner Only] Liste les serveurs où le bot est présent'),
    async execute(interaction) {
        if (interaction.user.id === config.owner_id) {
            const guilds = interaction.client.guilds.cache.map(guild => guild.name);
            await interaction.reply({content: `Je suis présent sur ${guilds.length} serveurs :\n🔹 ${guilds.join(`\n🔹 `)}`, ephemeral: true});
        }
        else {
            await interaction.reply({content: 'Vous n\'avez pas la permission d\'utiliser cette commande', ephemeral: true });
        }
    },
};
