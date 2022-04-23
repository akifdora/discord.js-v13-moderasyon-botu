const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const config = require("../config.json");

module.exports = {
	name: 'yardım',
	description: 'Botun komutlarını gösteren yardım mesajı',
	aliases: [],
	usage: 'yardım',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
	execute(message, args, client, db) {
        const embed = new MessageEmbed()
        .setTitle('4Debug | Yardım Menüsü', true)
        .addField(`\`${config.prefix}yardım\``, "Yardım Menüsüne bakarsın.", true)
        
        .addField(`\`${config.prefix}kick\``, "Belirtilen kullanıcıyı sunucu'dan atar.", true)
        .addField(`\`${config.prefix}ban\``, "Belirtilen kullanıcıyı sunucu'dan yasaklar.", true)
        .addField(`\`${config.prefix}mute\``, "Belirtilen kullanıcıyı susturur.", true)
        .addField(`\`${config.prefix}jail\``, "Belirtilen kullanıcıyı hapise atar.", true)
        .addField(`\`${config.prefix}timeout\``, "Belirtilen kullanıcıyı süreye atar.", true)
        
        .addField(`\`${config.prefix}unban\``, "Belirtilen kullanıcı'nın yasağını açar.", true)
        .addField(`\`${config.prefix}unmute\``, "Belirtilen kullanıcı'nın susturmasını açar.", true)
        .addField(`\`${config.prefix}unjail\``, "Belirtilen kullanıcı'nın hapsini açar.", true)
        .setThumbnail("https://4debug.com/assets/img/logo.png")
const buton1 = new MessageButton().setLabel('Website').setStyle('LINK').setURL('https://www.4debug.com/');
const buton2 = new MessageButton().setLabel('Crew').setStyle('LINK').setURL('https://crew.4debug.com/')
const buton3 = new MessageButton().setLabel('Instagram').setStyle('LINK').setURL('https://instagram.com/4.debug')

        const row = new MessageActionRow().addComponents(buton1).addComponents(buton2).addComponents(buton3)
        message.reply({
           embeds:[embed],
           components:[row],
       })
}
} 