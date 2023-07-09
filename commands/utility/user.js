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
    let intUser = interaction.options.getUser("utilisateur");

    if (!intUser) {
      intUser = interaction.user;
    }

    const userEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setAuthor({
        name: `${intUser.username} ( ${intUser.id} )`,
        iconURL: intUser.avatarURL(),
      })
      .setThumbnail(intUser.avatarURL())
      .setDescription(
        `\`Nom complet :\` ${intUser.username}#${intUser.discriminator}
        \`Nickname :\` ${intUser.nickname}
        \`ID :\` ${intUser.id}
        \`Création du compte :\` ${intUser.createdAt}
        \`Rejoint le :\` ${intUser.joinedTimestamp}`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [userEmbed] });
  },
};
