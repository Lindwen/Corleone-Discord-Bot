process.noDeprecation = true;

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("emote")
    .setDescription("Joue une emote avec quelqu'un")
    .addStringOption((option) =>
      option
        .setName("categories")
        .setDescription("Catégories d'emote")
        .setRequired(true)
        .setChoices(
          {name: "Câlin", value: "hug"},
          {name: "Bisous", value: "kiss"}
        )
    )
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("Utilisateur ciblé")
        .setRequired(true)
    ),

  async execute(interaction) {
    const randomkiss = [
      'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
      'https://media.giphy.com/media/hgcqkgBLCbwl2/giphy.gif',
      'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
      'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
      'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif',
      'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
      'https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif',
    ];
    const randomhug = [
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
      "https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif",
      "https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif",
      "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
      "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
    ];

    
    if (interaction.options.getString("categories") === "hug") {
      const random = Math.floor(Math.random() * randomhug.length);
      const user = interaction.options.getUser("utilisateur");
      await interaction.reply({
        content: `${interaction.user} fait un câlin à ${user}`,
        files: [randomhug[random]],
      });
    }
    else if (interaction.options.getString("categories") === "kiss") {
      const random = Math.floor(Math.random() * randomkiss.length);
      const user = interaction.options.getUser("utilisateur");
      await interaction.reply({
        content: `${interaction.user} fait un bisous à ${user}`,
        files: [randomkiss[random]],
      });
    }
  },
}