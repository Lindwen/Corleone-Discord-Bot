const fs = require("node:fs");
const path = require("node:path");
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
require("dotenv").config();

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      bot.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

bot.once(Events.ClientReady, () => {
  console.log("Ready!");
  bot.user.setPresence({status: "dnd"});
  bot.user.setActivity("🐱");
});

bot.on('ready', async() => {
  function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  task = () => {
    const status = ['dupliquer des 💎', '1+1=27 🧠'];
    let randomStatus = get_random(status);
    bot.user.setActivity(randomStatus);
  }
  task();
	setInterval(task, 60000);
});

bot.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = bot.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

bot.login(process.env.TOKEN);
