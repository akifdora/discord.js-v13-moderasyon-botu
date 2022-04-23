const Discord = require("discord.js");

module.exports = {
	name: 'eval',
	description: 'Yazdığınız kodu çalıştırmanızı sağlar',
	aliases: [],
	usage: 'eval <kod>',
  cooldown: 2,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
execute(message, args, client, db) {
if(message.author.id !== "343831230426382336" && message.author.id !== "563370396632612864" && message.author.id !== "552207134419451925") return message.reply(`Bu komutu sadece Bot Sahibi kullanabilir!`);
    try {
        let codein = args.join(" ");
        let code = eval(codein);

      if (codein.length < 1) return message.reply(`deneyebilmek için bir kod girmelisin!`)

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('» Kod', `\`\`\`js\n${codein}\`\`\``)
        .addField('» Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField('» Hata', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
      }
    }
  }