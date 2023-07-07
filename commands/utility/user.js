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
        name: intUser.username,
        iconURL: intUser.avatarURL(),
        url: intUser.avatarURL(),
      })
      .setThumbnail(intUser.avatarURL())
      .addFields(
        { name: "Nom d'utilisateur :", value: intUser.username },
        { name: "ID :", value: intUser.id },
        { name: "Création du compte :", value: `${intUser.createdAt}` }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [userEmbed] });
  },
};
