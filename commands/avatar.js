const Discord = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'Kendinizin ya da istediğiniz kullanıcının profil fotoğrafını görmenizi sağlar.',
	aliases: ['pp'],
	usage: 'avatar @user',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
	execute(message, args, client, db) {
        
        let member = message.mentions.members.first()
        let embed = new Discord.MessageEmbed()

        if(member){
            embed.setTitle(`${member.user.username}`).setImage(member.user.avatarURL({dynamic: true, size: 2048}))
        }else{
            embed.setTitle(`${message.author.username}`).setImage(message.author.avatarURL({dynamic: true, size: 2048}))
        }
        message.channel.send({embeds: [embed]})
	},
};