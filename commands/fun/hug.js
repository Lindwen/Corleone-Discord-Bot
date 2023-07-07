const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Fais un câlin à quelqu'un")
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("L'utilisateur à qui faire un câlin")
        .setRequired(true)
    ),
  async execute(interaction) {
    const randomhug = [
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
      "https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif",
      "https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif",
      "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
      "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
    ];
    const random = Math.floor(Math.random() * randomhug.length);
    const user = interaction.options.getUser("utilisateur");
    await interaction.reply({
      content: `${interaction.user} fait un câlin à ${user}`,
      files: [randomhug[random]],
    });
  },
};
