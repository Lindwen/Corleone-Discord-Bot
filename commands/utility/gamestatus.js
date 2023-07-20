const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const Gamedig = require("gamedig");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gamestatus")
    .setDescription("Répond avec les informations du serveur."),
  async execute(interaction) {
    Gamedig.query({
      type: "minecraft",
      host: "corleone.lindwen.fr",
    })
      .then((state) => {
        let playerList = "";

        if (state.players.length == 0) {
          playerList = " 🔸 Il n'y a personne de connecté 😥";
        }

        for (var i = 0; i < state.players.length; i++) {
          if (!state.players[i].name) {
            state.players[i].name = "*Connecting ...*";
          }
          playerList = playerList + "\n 🔹 " + state.players[i].name;
        }

        const gameEmbed = new EmbedBuilder()
          .setTitle("🟢 " + state.name)
          .setColor("#5ad65c")
          .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━\n\u200B")
          .addFields(
            { name: "Ping : `" + state.ping + " ms`", value: "\n" },
            {
              name:
                "Joueurs en ligne : `" +
                state.players.length +
                "/" +
                state.maxplayers +
                "`",
              value: playerList,
            }
          )
          .setFooter({ text: "mc.lindwen.fr | 1.18.2" })
          .setTimestamp()
          .setThumbnail(
            "https://media.forgecdn.net/avatars/thumbnails/841/179/64/64/638235662713791359.png"
          );

        interaction.reply({ embeds: [gameEmbed] });
      })
      .catch((error) => {
        console.log(error);
        const gameEmbed = new EmbedBuilder()
          .setTitle("🔴 Serveur offline")
          .setColor("#d65a5a")
          .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━\n\u200B")
          .setFooter({ text: "mc.lindwen.fr | 1.18.2" })
          .setTimestamp()
          .setThumbnail(
            "https://media.forgecdn.net/avatars/thumbnails/841/179/64/64/638235662713791359.png"
          );
        interaction.reply({ embeds: [gameEmbed] });
      });
  },
};
