const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get-invitation')
        .setDescription('[Owner Only] Obtenir une invitation du bot de n\'importe quel serveur')
        .addStringOption(option => option.setName('serveur').setDescription('Nom du serveur').setRequired(true)),
    async execute(interaction) {
        if (interaction.user.id === config.owner_id) {
            const guild = interaction.client.guilds.cache.find(guild => guild.name === interaction.options.getString('serveur'));
            if (guild) {
                const invite = await guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').first().createInvite({ maxAge: 0, maxUses: 0 });
                await interaction.reply({ content: `L'invitation du serveur **${guild.name}** est : ${invite}`, ephemeral: true });
            }
            else {
                await interaction.reply({ content: 'Je ne suis pas présent sur ce serveur', ephemeral: true });
            }
        }
        else {
            await interaction.reply({ content: 'Vous n\'avez pas la permission d\'utiliser cette commande', ephemeral: true });
        }
    },
};
