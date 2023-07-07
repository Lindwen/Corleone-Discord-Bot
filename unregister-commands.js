const { REST, Routes } = require("discord.js");
require("dotenv").config();

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
  try {
    const data = await rest.put(
      // delete commands from a guild
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: [] },

      // delete commands globally
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: [] }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();
