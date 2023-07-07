const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Embrasse quelqu'un")
    .addUserOption((option) =>
      option
        .setName("utilisateur")
        .setDescription("L'utilisateur à embrasser")
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
    ]    
    const random = Math.floor(Math.random() * randomkiss.length);
    const user = interaction.options.getUser("utilisateur");
    await interaction.reply({
      content: `${interaction.user} embrasse ${user}`,
      files: [randomkiss[random]],
    });
  },
};
