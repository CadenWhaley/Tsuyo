const Discord = require("discord.js");
const colors = require('../lib/colors.json')

module.exports = (client, emoji) => {
    let settings = client.getSettings(emoji.guild.id);
    const language = settings.language
    const lang = require("../lib/languages/" + language + ".json")

    if (settings.logEmojiUpdates == "true") {
        let modLogChannel = settings.modLogChannel;

        if (modLogChannel && emoji.guild.channels.cache.find(c => c.name === settings.modLogChannel)) {
            let embed = new Discord.MessageEmbed()
                .setTitle(`🙂 ${lang.EmojiCreated}`)
                .setColor(colors.green)
                .setDescription(`${lang.Name}: ${emoji.name}\n${lang.ID}: ${emoji.id}`)
                .addField(lang.EmojiURL, emoji.url)
                .setTimestamp()

            emoji.guild.channels.cache.find(c => c.name === settings.modLogChannel).send(embed);
        }
    }
};