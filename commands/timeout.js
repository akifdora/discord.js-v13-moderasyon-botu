const Discord = require("discord.js");
const config = require('../config.json');
const ms = require('ms')

module.exports = {
	name: 'timeout',
	description: 'Etiketlediğiniz kullanıcıya timeout atmanızı sağlar!',
	aliases: [],
	usage: 'timeout @user süre sebep',
  cooldown: 2,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
execute(message, args, client, db) {
  const yetkihata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('<:hata:967088792022417449> • HATA!', true)
  .setDescription(`Bu komutu kullanmak için \`MODERATE_MEMBERS\` yetkisine sahip olmalısın!`)
  .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
  if(!message.member.permissions.has("MODERATE_MEMBERS")){ return message.reply({ embeds:[yetkihata] })};
      
      let member = message.mentions.members.first()
      const sebep = args.slice(2).join(" ");
      const sür = args.slice(1).join(" ");
      const süre = ms(sür)

      if(!member){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('<:hata:967088792022417449> • HATA!', true)
        .setDescription(`Zaman aşımı uygulamak istediğin kullanıcıyı belirtmelisin!`)
        .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
        return message.reply({ embeds:[embed] })
      }

      if(!sür){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('<:hata:967088792022417449> • HATA!', true)
        .setDescription(`Zaman aşımı uygulamak istediğin süreyi belirtmelisin!`)
        .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
        return message.reply({ embeds:[embed] })
      }

      if(!sebep){
        sebep = "Sebep belirtilmemiş!"
      }
      
      member.timeout(süre, sebep)
      const embed = new Discord.MessageEmbed()
      .setTitle('<:onay:967088793150705714> • BAŞARILI!', true)
      .setDescription(`${member.user} isimli kullanıcıya zaman aşımı uygulandı!`)
      .setThumbnail("https://c.tenor.com/f1fzLP0cn3EAAAAM/mute-anime-glitch.gif")
    message.reply({ embeds:[embed] })

      const embed2 = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setColor(0x00ae86)
        .setTitle("İşlem: Timeout")
        .setTimestamp()
        .addField("**Zaman Aşımı Uygulanan Kişi:**", `${member.user}`)
        .addField("**Yetkili:**", `${message.author}`)
        .addField("**Sebep:**", `${sebep}`)
      message.guild.channels.cache.get(config.logchannel).send({ embeds: [embed2]})
      

}
} 