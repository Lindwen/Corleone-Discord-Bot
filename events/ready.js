const { Events } = require("discord.js");

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
      const status = ["dupliquer des 💎", "1+1=27 🧠"];
      let randomStatus = get_random(status);
      bot.user.setActivity(randomStatus);
    };
    task();
    setInterval(task, 60000);
  },
};
