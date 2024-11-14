const { Client, GatewayIntentBits, Activity } = require("discord.js");
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const config = require("./config.json");

const commands = "Ping parancs, Help parancs, Teszt parancs, Botinfok parancs";

const botinfos =
  "Ez egy MAGYAR bot ami Open Source! [Eredetileg készítette: @Olcsa] Githubom: https://github.com/Olcsa123Dev/OpenBot-Source/";

bot.once("ready", () => {
  console.log(`Bejelentkezve: ${bot.user.tag}`);
  bot.user.setActivity("Fejlesztőm: @Olcsa", { type: "WATCHING" });
});

bot.on("messageCreate", (message) => {
  if (message.content === `${config.prefix}ping`) {
    message.reply(`🏓 Pong!`);
  } else if (message.content === `${config.prefix}help`) {
    message.reply(`Jelenlegi parancsaim: ${commands}`);
  } else if (message.content === `${config.prefix}help`) {
    message.reply(`Jelenlegi parancsaim: ${commands}`);
  } else if (message.content === `${config.prefix}teszt`) {
    message.reply(`Teszt sikeres..`);
  } else if (message.content === `${config.prefix}botinfok`) {
    message.reply(`Bot információk: ${botinfos}`);
  }
});

bot.login(config.token);
