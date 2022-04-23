const Discord = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'kick',
	description: 'Etiketlediğiniz kullanıcıyı sunucudan atmanızı sağlar!',
	aliases: [],
	usage: 'kick @user',
  cooldown: 2,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
execute(message, args, client, db) {
  const yetkihata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('<:hata:967088792022417449> • HATA!', true)
  .setDescription(`Bu komutu kullanmak için \`KICK_MEMBERS\` yetkisine sahip olmalısın!`)
  .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
  if(!message.member.permissions.has("KICK_MEMBERS")){ return message.reply({ embeds:[yetkihata] })};

let member = message.mentions.members.first()
      if(!member){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('<:hata:967088792022417449> • HATA!', true)
        .setDescription(`Yasaklamak istediğin kullanıcıyı belirtmelisin!`)
        .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
        return message.reply({ embeds:[embed] })
      }

      let sebep = args.slice(1).join(" ");
      if(!sebep){
        sebep = "Sebep belirtilmemiş!"
      }
      member.kick(sebep)
      const embed = new Discord.MessageEmbed()
      .setTitle('<:onay:967088793150705714> • BAŞARILI!', true)
      .setDescription(`${member.user} isimli kullanıcı sunucudan atıldı!`)
      .setThumbnail("https://c.tenor.com/izi_49ZVYyYAAAAC/tiens-retien.gif")
    message.reply({ embeds:[embed] })

      const embed2 = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setColor(0x00ae86)
        .setTitle("İşlem: Kick")
        .setTimestamp()
        .addField("**Kicklenen Kişi:**", `${member.user}`)
        .addField("**Yetkili:**", `${message.author}`)
        .addField("**Sebep:**", `${sebep}`)
      message.guild.channels.cache.get(config.logchannel).send({ embeds: [embed2]})
      

}
} 