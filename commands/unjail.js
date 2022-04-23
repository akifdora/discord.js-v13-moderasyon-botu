const Discord = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'unjail',
	description: 'Etiketlediğiniz kullanıcıya cezalı rolü vermenizi sağlar!',
	aliases: [],
	usage: 'unjail @user',
  cooldown: 2,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
execute(message, args, client, db) {
  const yetkihata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('<:hata:967088792022417449> • HATA!', true)
  .setDescription(`Bu komutu kullanmak için \`MANAGE_ROLES\` yetkisine sahip olmalısın!`)
  .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
  if(!message.member.permissions.has("MANAGE_ROLES")){ return message.reply({ embeds:[yetkihata] })};

  let member = message.mentions.members.first()
  if(!member){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle('<:hata:967088792022417449> • HATA!', true)
    .setDescription(`Cezasını kaldırmak istediğin kullanıcıyı belirtmelisin!`)
    .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
    return message.reply({ embeds:[embed] })
  }

  if(!member.roles.cache.has("965706819467116635")){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle('<:hata:967088792022417449> • HATA!', true)
    .setDescription(`Bu kullanıcı <@&965706819467116635> rolüne sahip değil!`)
    .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
    return message.reply({ embeds:[embed] })
  }

      member.roles.remove("965706819467116635")
      const embed = new Discord.MessageEmbed()
      .setTitle('<:onay:967088793150705714> • BAŞARILI!', true)
      .setDescription(`${member.user} isimli kullanıcıdan <@&965706819467116635> rolü alındı!`)
      .setThumbnail("https://c.tenor.com/MMA6_WvqS60AAAAC/escape-im-out.gif")
    message.reply({ embeds:[embed] })

      const embed2 = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setColor(0x00ae86)
        .setTitle("İşlem: Unjail")
        .setTimestamp()
        .addField("**Cezası Kaldırılan Kişi:**", `${member.user}`)
        .addField("**Yetkili:**", `${message.author}`)
      message.guild.channels.cache.get(config.logchannel).send({ embeds: [embed2]})
      

}
} 