const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const Gamedig = require("gamedig");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gamestatus")
    .setDescription("Répond avec les informations du serveur.")
    // ajouter 2 options : type et server
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Le type de serveur.")
        .setRequired(true)
        .setChoices(
          { name: "Minecraft", value: "minecraft" },
          { name: "Garry's Mod", value: "garrysmod" }
        ))
    .addStringOption((option) =>
      option
        .setName("server")
        .setDescription("Le serveur à ping.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("port")
        .setDescription("Le port du serveur.")
        .setRequired(false)
    ),
  async execute(interaction) {
    let type = interaction.options.getString("type");
    let server = interaction.options.getString("server");
    let port = interaction.options.getInteger("port");
    Gamedig.query({
      type: type,
      host: server,
      port: port,
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

        if (playerList.length > 1024) {
          playerList = playerList.substring(0, 1020) + "\n...";
        }

        let connect = state.connect;
        if (type == "garrysmod") {
          connect = "steam://connect/" + connect;
        }

        const gameEmbed = new EmbedBuilder()
          .setTitle("🟢 " + state.name)
          .setColor("#5ad65c")
          .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━\n\u200B")
          .addFields(
            {
              name: "🏓 ┃ Ping :",
              value: " 🔹 " + state.ping + " ms \n\u200B"
            },
            {
              name: "🌍 ┃ Map :",
              value: " 🔹 " + state.map + " \n\u200B"
            },
            {
              name: "👥 ┃ Joueurs en ligne : `" + state.players.length + "/" + state.maxplayers + "`",
              value: playerList,
            },
            {
              name: "\u200B",
              value: "━━━━━━━━━━━━━━━━━━━━━━━━"
            },
            {
              name: "📡 ┃ Rejoindre le serveur :",
              value: "**" + connect + "**"
            },
          )
          .setTimestamp()

        interaction.reply({ embeds: [gameEmbed] });
      })
      .catch((error) => {
        console.log(error);
        const gameEmbed = new EmbedBuilder()
          .setTitle("🔴 Serveur offline")
          .setColor("#d65a5a")
          .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━\n\u200B")
          .setTimestamp()
        interaction.reply({ embeds: [gameEmbed] });
      });
  },
};
