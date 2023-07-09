const { Events } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(bot) {
    console.log(`Ready! Logged in as ${bot.user.tag}`);
    bot.user.setPresence({ status: "dnd" });
    bot.user.setActivity("🐱");

    function get_random(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
    task = () => {
      let randomStatus = get_random(config.status);
      bot.user.setActivity(randomStatus);
    };
    task();
    setInterval(task, 60000);
  },
};
