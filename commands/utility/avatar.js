const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Affiche l'avatar de l'utilisateur")
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

    const avatarEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setAuthor({
        name: `${intUser.username} ( ${intUser.id} )`,
        iconURL: intUser.avatarURL(),
      })
      .setImage(intUser.avatarURL())
      .setTimestamp();

    await interaction.reply({ embeds: [avatarEmbed] });
  },
};
