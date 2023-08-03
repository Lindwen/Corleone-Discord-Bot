const { Events } = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(bot) {

        let channelID = 1136577026577404004;
        let channel = client.channels.cache.get(channelID);
        await channel.bulkDelete(1, true)

        task = () => {
            Gamedig.query({
                type: 'minecraft',
                host: 'corleone.lindwen.fr'
            }).then((state) => {
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
        }
        task();
        setInterval(task, 60000);
    }
};
