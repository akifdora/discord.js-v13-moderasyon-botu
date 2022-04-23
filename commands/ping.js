const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Botun gecikme süresini görmenizi sağlar.',
	aliases: [],
	usage: 'ping @user',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
	execute(message, args, client, db) {
        const embed = new Discord.MessageEmbed()
        embed.addField("Gecikme Süresi", `${client.ws.ping}ms`).setThumbnail("https://c.tenor.com/QTtX8fpH_DEAAAAM/akane-shinjo-anime.gif")
        message.channel.send({embeds: [embed]})
	},
};