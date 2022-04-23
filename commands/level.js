const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const db = require("quick.db");
const { type } = require("os");

module.exports = {
	name: 'level',
	description: 'Etiketlediğiniz kişinin veya sizin levelinizi gösterir',
	aliases: ['seviye', "rank"],
	usage: 'level @user',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

async execute(message, args, client) {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let seyit = db.get(`level_${user.id}`) || 0;
  let hyperion = db.get(`exp_${user.id}`) || 0;
  let asunack = Math.floor(Math.pow(seyit / 0.1, 2));

  let herkes = db.all().filter(i => i.ID.startsWith("exp_")).sort((a, b) => b.data - a.data);
  let seviye = herkes.map(x => x.ID).indexOf(`exp_${user.id}`) + 1;

  const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setBackground("IMAGE", "https://4debug.com/assets/img/lvl-card-bg.jpg")
    .setRank(seviye)
    .setLevel(seyit)
    .setCurrentXP(hyperion)
    .setRequiredXP(asunack)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));
  const img = await card.build();
  let attachment = new MessageAttachment(img, "rank.png");
  return message.reply({files: [attachment]});
}
}