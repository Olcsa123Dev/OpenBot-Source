const { Client, GatewayIntentBits, Activity } = require("discord.js");
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const config = require("./config.json");

const commands = "Ping parancs ";

bot.once("ready", () => {
  console.log(`Bejelentkezve: ${bot.user.tag}`);
  bot.user.setActivity("Fejlesztőm: @Olcsa", { type: "WATCHING" });
});

bot.on("messageCreate", (message) => {
  if (message.content === `${config.prefix}ping`) {
    message.reply(`🏓 Pong!`);
  } else if (message.content === `${config.prefix}help`) {
    message.reply(`Jelenlegi parancsaim: ${commands}`);
  }
});

bot.login(config.token);
