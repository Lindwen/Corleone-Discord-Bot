const { REST, Routes } = require("discord.js");
const config = require("./config.json");

const rest = new REST().setToken(config.token);

// remove commands to some guilds
(async () => {
  try {
    for (const guildId of config.guilds) {
      const data = await rest.put(
        Routes.applicationGuildCommands(config.client_id, guildId),
        { body: [] }
      );

      console.log(`Successfully removed application (/) commands in guild ${guildId}.`);
    }
  } catch (error) {
    console.error(error);
  }
})();


// remove commands globally
// (async () => {
//   try {
//     const data = await rest.put(
//       Routes.applicationCommands(config.client_id),
//       { body: [] }
//     );

//     console.log(`Successfully removed ${data.length} application (/) commands globally.`);
//   } catch (error) {
//     console.error(error);
//   }
// })();
