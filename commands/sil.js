const Discord = require('discord.js');
const data = require('quick.db');

module.exports = {
	name: 'sil',
	description: 'Kanalda belirlediğiniz kadar mesaj silmenizi sağlar!',
	aliases: [],
	usage: 'sil sayı',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
async execute(message, args, client, db) {
  const yetkihata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('<:hata:967088792022417449> • HATA!', true)
  .setDescription(`Bu komutu kullanmak için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`)
  .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
  if(!message.member.permissions.has("MANAGE_CHANNELS")){ return message.reply({ embeds:[yetkihata] })};

  const sayıhata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('<:hata:967088792022417449> • HATA!', true)
  .setDescription('<:hata:967088792022417449> • Kaç mesajın silineceğini belirtmedin!')
  .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
  if(isNaN(args[0])){ return message.reply({ embeds:[sayıhata] })};

if(args[0] > 100) {
if(args[0].split('')[1] === '0' && args[0].split('')[2] === '0') {
var kaçkere = 0;
var i = 0;
let d = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for(i; i <= Number(args[0]); i++) {

if(args[0] > 9999) {
kaçkere = i.toString().split('')[0]+i.toString().split('')[1]+i.toString().split('')[2];
} else if(args[0] > 999) {
kaçkere = i.toString().split('')[0]+i.toString().split('')[1];
} else {
kaçkere = i.toString().split('')[0];
};
};
let nbr = [];
var l = 0;
message.delete();
if(kaçkere > 0) {
/*for(var i=1; i <= kaçkere;i++) {*/



    var msg_size = 100;
    while (msg_size == 100) {
    if(l == kaçkere) return; 
    l++;
    const sd = await message.channel.messages.fetch({limit: 100});
let shp = [];
sd.forEach(a => {
data.add(`size.${message.id}.${a.author.id}`, 1);
data.set(`ok.${message.id}.${a.author.id}`, 'tm');
data.add(`sizee.${message.id}`, 1);
})
let sayı = 0;
sd.forEach(a => {
if(a.createdAt < Date.now()-1209600000) return sayı--;
sayı++
});

const sürehata = new Discord.MessageEmbed()
.setColor("RED")
.setTitle('<:hata:967088792022417449> • HATA!', true)
.setDescription('<:hata:967088792022417449> • 2 haftadan önce yazılan mesajları silemem!')
.setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
if(sayı <= 0){ return message.reply({ embeds:[sürehata] })};


message.channel.bulkDelete(100)
msg_size == 100;

/*};*/
if(l == kaçkere) {
setTimeout(async () => {
message.guild.members.cache.forEach(async n => {
if(data.fetch(`ok.${message.id}.${n.user.id}`)) {
nbr.push(`${n.user}: **${data.fetch(`size.${message.id}.${n.user.id}`)}**`)
}
});

const silindi = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle('<:onay:967088793150705714> • BAŞARILI!', true)
.setThumbnail("https://c.tenor.com/thbRYiSqFysAAAAM/anime-trash.gif")
.setDescription(`${await data.fetch(`sizee.${message.id}`)} adet mesaj silindi!\n\n${nbr.join('\n')}`)
message.channel.send({ embeds:[silindi] })


message.guild.members.cache.forEach(n => {
if(data.fetch(`ok.${message.id}.${n.user.id}`)) {
data.delete(`size.${message.id}.${n.user.id}`);
data.delete(`ok.${message.id}.${n.user.id}`);
}
})
data.delete(`sizee.${message.id}`);
}, 1000)
};
};
};
};
} else {
message.channel.bulkDelete(args[0]);
}
}
}