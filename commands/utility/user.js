const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Affiche des informations sur l'utilisateur")
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("Utilisateur à afficher")
        .setRequired(false)
    ),
  async execute(interaction) {
    let user = interaction.options.getUser("utilisateur");

    if (!user) {
      user = interaction.user;
    }

    let member = await interaction.guild.members.fetch(user);

    const userEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setAuthor({
        name: `${user.username} ( ${user.id} )`,
        iconURL: user.avatarURL(),
      })
      .setThumbnail(user.avatarURL())
      .setDescription(
        `\`Nom complet :\` ${user.username}#${user.discriminator}
        \`Nickname :\` ${user.nickname || "Aucun"}
        \`ID :\` ${user.id}
        \`Bot :\` ${member.bot ? "✅" : "❌"}
        \`Créé le :\` ${user.createdAt}
        \`Rejoint le :\` ${member.joinedAt}`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [userEmbed] });
  },
};
