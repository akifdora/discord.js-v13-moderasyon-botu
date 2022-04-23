const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MEMBERS,Discord.Intents.FLAGS.GUILD_BANS,Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Discord.Intents.FLAGS.GUILD_INTEGRATIONS,Discord.Intents.FLAGS.GUILD_WEBHOOKS,Discord.Intents.FLAGS.GUILD_INVITES,Discord.Intents.FLAGS.GUILD_VOICE_STATES,Discord.Intents.FLAGS.GUILD_PRESENCES,Discord.Intents.FLAGS.GUILD_MESSAGES,Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,Discord.Intents.FLAGS.DIRECT_MESSAGES,Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
const config = require("./config.json");
const logs = require('discord-logs');
logs(client);
const { ReactionRole } = require("reaction-role");
const system = new ReactionRole(config.token);

/*const express = require("express");
const app = express();
app.get("/foo", (req, res, next) => {
  const foo = JSON.parse(req.body.jsonString);
});
process.on("unhandledRejection", (reason, promise) => {
});*/

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

/************** READY EVENTİ **************/
client.on("ready", async () => {
    var altyazı = [
    `Instagram: @4.debug`,
	`4Debug #CREW üyelerini`,
    `www.4debug.com`,
    `crew.4debug.com`
    ];
  setInterval(function() {
    var random = Math.floor(Math.random() * altyazı.length);
    /*
    const seskanalı = client.channels.cache.find(kanal => kanal.id === "967202592423825448");
    seskanalı.setName(altyazı[random]);
    */
    client.user.setActivity(altyazı[random], { type: 'WATCHING' });
    }, 2 * 3500);
    /*
    joinVoiceChannel({
        channelId: "967202592423825448",
        guildId: "964638689865134110",
        adapterCreator: client.guilds.cache.get("964638689865134110").voiceAdapterCreator
    })
    */
    console.log('Bot çalışıyor!')

    setInterval(() => {
        let GuildID = "964638689865134110"
        let biraylik = "967216977896693781"
        let ikiaylik = "967217110180847617"
        let ucaylik = "967217132213526568"
        let altiaylik = "967217151549259826"
        let dokuzaylik = "967217169848995880"
        let birsenelik = "967217185632190465"
        let ikisenelik = "967217205357977702"
        let ucsenelik = "967217224974745661"
        const server = client.guilds.cache.get(GuildID);
      
        server.members.cache.forEach(async member => {
          let uyelikkontrol = db.get(`uyelikkontrol1_${member.id}`) || 0;
      
          if(uyelikkontrol == 0 || null){
            if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 30){
              member.roles.add(biraylik)
              db.add(`uyelikkontrol1_${member.id}`, 1)
            }
          }
      
          if(uyelikkontrol == 1){
              if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 60){
                member.roles.remove(biraylik)
                member.roles.add(ikiaylik)
                db.add(`uyelikkontrol1_${member.id}`, 1)
              }
            }
      
          if(uyelikkontrol == 2){
              if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 90){
                member.roles.remove(ikiaylik)
                member.roles.add(ucaylik)
                db.add(`uyelikkontrol1_${member.id}`, 1)
              }
            }
      
          if(uyelikkontrol == 3){
              if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 182){
                member.roles.remove(ucaylik)
                member.roles.add(altiaylik)
                db.add(`uyelikkontrol1_${member.id}`, 1)
              }
            }
      
          if(uyelikkontrol == 4){
              if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 273){
                member.roles.remove(altiaylik)
                member.roles.add(dokuzaylik)
                db.add(`uyelikkontrol1_${member.id}`, 1)
              }
            }
      
            if(uyelikkontrol == 5){
                if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 365){
                  member.roles.remove(dokuzaylik)
                  member.roles.add(birsenelik)
                  db.add(`uyelikkontrol1_${member.id}`, 1)
                }
              }
      
            if(uyelikkontrol == 6){
                if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 730){
                  member.roles.remove(birsenelik)
                  member.roles.add(ikisenelik)
                  db.add(`uyelikkontrol1_${member.id}`, 1)
                }
              }
      
            if(uyelikkontrol == 7){
                if(Date.now() - member.joinedAt >= 1000 * 60 * 60 * 24 * 1095){
                  member.roles.remove(ikisenelik)
                  member.roles.add(ucsenelik)
                  db.add(`uyelikkontrol1_${member.id}`, 1)
                }
              }
      
      
        })
      
      }, 10000 * 10)
})
/************** READY EVENTİ **************/

/************** ÜYE GİRİŞ DOĞRULAMASI **************/
const ugd = system.createOption("onay:967088793150705714", ["964655848318201858"]);
system.createMessage(
	"964654729483419688",
	"966837610217607168",
	1, // reaction limit
    ugd
);
system.init();
/************** ÜYE GİRİŞ DOĞRULAMASI **************/

/************** LEVEL SİSTEMİ **************/
client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.on("message", async (message) => {
	if(message.channel.type === "dm") return;
    if (!message.guild || message.author.bot) return;
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = db.set(`level_${message.author.id}`,level);
            const levelkanal = message.guild.channels.cache.find(kanal => kanal.id === config.levelkanali);
            levelkanal.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`);
        }
        
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});
/************** LEVEL SİSTEMİ **************/

/************** SEVİYE ROLÜ SİSTEMİ **************/
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let level = db.get(`level_${message.author.id}`) || 0;
    let levelkontrol = db.get(`levelkontrol_${message.author.id}`) || 0;
    
    if(levelkontrol == 0 || null){
     if(level >= 5) {
       message.member.roles.add("964657569740255292")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye5 = new Discord.MessageEmbed()
       .setTitle("TEBRİKLER 🎉")
       .setDescription(`${message.author}, 5.Seviye'ye ulaştığın için\n<@&964657569740255292> rolünü kazandın!`)
        message.reply({ embeds: [seviye5] });
      } 
    }
   
    if(levelkontrol == 1){
     if(level >= 10) {
       message.member.roles.remove("964657569740255292")
       message.member.roles.add("964657658286182410")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye10 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 10.Seviye'ye ulaştığın için\n<@&964657658286182410> rolünü kazandın!`)
      message.reply({ embeds: [seviye10] });
     }
    }
   
    if(levelkontrol == 2){
     if(level >= 20) {
       message.member.roles.remove("964657658286182410")
       message.member.roles.add("964657755417882644")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye20 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 20.Seviye'ye ulaştığın için\n<@&964657755417882644> rolünü kazandın!`)
      message.reply({ embeds: [seviye20] });
     }
    }
   
    if(levelkontrol == 3){
     if(level >= 30) {
       message.member.roles.remove("964657755417882644")
       message.member.roles.add("964658164672888842")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye30 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 30.Seviye'ye ulaştığın için\n<@&964658164672888842> rolünü kazandın!`)
      message.reply({ embeds: [seviye30] });
     }
    }
   
    if(levelkontrol == 4){
     if(level >= 40) {
       message.member.roles.remove("964658164672888842")
       message.member.roles.add("964658240476549160")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye40 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 40.Seviye'ye ulaştığın için\n<@&964658240476549160> rolünü kazandın!`)
      message.reply({ embeds: [seviye40] });
     }
    }
   
    if(levelkontrol == 5){
     if(level >= 50) {
       message.member.roles.remove("964658240476549160")
       message.member.roles.add("964658314430521404")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye50 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 50.Seviye'ye ulaştığın için\n<@&964658314430521404> rolünü kazandın!`)
      message.reply({ embeds: [seviye50] });
     }
    }
   
    if(levelkontrol == 6){
     if(level >= 60) {
       message.member.roles.remove("964658314430521404")
       message.member.roles.add("964658374396485653")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye60 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 60.Seviye'ye ulaştığın için\n<@&964658374396485653> rolünü kazandın!`)
      message.reply({ embeds: [seviye60] });
     }
    }
   
    if(levelkontrol == 7){
     if(level >= 80) {
       message.member.roles.remove("964658374396485653")
       message.member.roles.add("964658497570615397")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye80 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 80.Seviye'ye ulaştığın için\n<@&964658497570615397> rolünü kazandın!`)
      message.reply({ embeds: [seviye80] });
     }
    }
   
    if(levelkontrol == 8){
     if(level >= 100) {
       message.member.roles.remove("964658497570615397")
       message.member.roles.add("964658588960317460")
       db.add(`levelkontrol_${message.author.id}`, 1)
       const seviye100 = new Discord.MessageEmbed()
      .setTitle("TEBRİKLER 🎉")
      .setDescription(`${message.author}, 100.Seviye'ye ulaştığın için\n<@&964658588960317460> rolünü kazandın!`)
      message.reply({ embeds: [seviye100] });
     }
    }
   
});
/************** SEVİYE ROLÜ SİSTEMİ **************/

/************** ÖNERİ KANALI **************/
client.on("message", async message => {  
    if(message.channel.id !== config.onerikanali) return; 
    if(message.author.bot) return
    message.delete()
    let oneri = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Öneri")
    .addField("Kullanıcı:", `${message.author}`)
    .setThumbnail(message.author.avatarURL({ dynamic:true }))
    .setDescription(`${message.content}`)
    client.channels.cache.get(config.onerikanali).send({ embeds: [oneri]}).then(sentEmbed => {
      sentEmbed.react("<:begendim:967088792769036358>")
      sentEmbed.react("<:begenmedim:967088793796620349>")
    })
  })
/************** ÖNERİ KANALI **************/

/************** REKLAM ENGELLEME **************/
client.on("message", message => {
    if (!message.guild) return;
        const reklam = ["discord.gg","discord.io","youtube.com","youtu.be","instagram.com","twitter.com","facebook.com","twitch.tv"];
          if (reklam.some(word => message.content.includes(word))) {
            if(message.member.permissions.has("MANAGE_CHANNELS")) return;
            try {
                message.delete();
                const reklamuyarı = new Discord.MessageEmbed()
                .setTitle("<:uyari:967088791825289294> • UYARI")
                .setDescription(`${message.author}, Bu sunucuda \`Reklam Engelleme\` sistemi aktiftir, reklam yapamazsın!`)
                return message.channel.send({ embeds: [reklamuyarı] }).then(message => setTimeout(() => message.delete(), 7500));
            } catch(err) {
              console.log(err);
            }
          }
      });
/************** REKLAM ENGELLEME **************/

/************** SPAM ENGELLEME **************/
const userMap = new Map();
client.on("message", async message => {
   if(!message.guild) return;
    if(message.author.bot) return;

    if(message.member.permissions.has("MANAGE_MESSAGES") || message.member.permissions.has("ADMINISTRATOR")) return;
    if(userMap.has(message.author.id)) {
    const userdata = userMap.get(message.author.id);
    let msgcount = userdata.msgcount;
    ++msgcount;
    if(parseInt(msgcount) === 5) {
    message.channel.bulkDelete('5')
    const spamuyarı = new Discord.MessageEmbed()
    .setTitle("<:uyari:967088791825289294> • UYARI")
    .setDescription(`${message.author}, Bu sunucuda spam yapmak yasak!`)
    message.channel.send({ embeds: [spamuyarı] }).then(message => setTimeout(() => message.delete(), 7500));
    } else {
    userdata.msgcount = msgcount;
    userMap.set(message.author.id, userdata)
    }
    } else {
    userMap.set(message.author.id, {
    msgcount: 1,
    lastMessage: message,
    timer: null
    });
    setTimeout(() => {
      userMap.delete(message.author.id);
    }, 5000);
    }
});
/************** SPAM ENGELLEME **************/

/************** LOG **************/
client.on(`guildMemberAdd`, async member => {
    var gelen = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("📥 • YENİ BİR ÜYEMİZ VAR!")
    .setThumbnail(member.user.avatarURL({display: true}))
    .setDescription(`${member.user} sunucuya katıldı, şu an sunucumuzda ${member.guild.memberCount} üye var!`)
    client.channels.cache.get(config.gelengiden).send({ embeds: [gelen]})
});

client.on(`guildMemberRemove`, async member => {
    var giden = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("📤 • BİR ÜYE SUNUCUDAN AYRILDI!")
    .setThumbnail(member.user.avatarURL({display: true}))
    .setDescription(`${member.user} sunucudan ayrıldı, şu an sunucumuzda ${member.guild.memberCount} üye var!`)
    client.channels.cache.get(config.gelengiden).send({ embeds: [giden]})
});

client.on("guildMemberRoleAdd", (member, role) => {
    if(member.user.bot) return;
    const logkanal = member.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const roleklendi = new Discord.MessageEmbed().setAuthor("Kişiye Rol Eklendi!", member.user.avatarURL({dynamic: true})).setDescription(`${member.user} adlı üyeye ${role} rolü eklendi!`)
    logkanal.send({ embeds: [roleklendi] })
  });
  
  client.on("guildMemberRoleRemove", (member, role) => {
    if(member.user.bot) return;
    const logkanal = member.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const rolalindi = new Discord.MessageEmbed().setAuthor("Kişiden Rol Alındı!", member.user.avatarURL({dynamic: true})).setDescription(`${member.user} adlı üyeden ${role} rolü alındı!`)
    logkanal.send({ embeds: [rolalindi] })
  });
  
  client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {
    if(member.user.bot) return;
    const logkanal = member.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const isimdegisti = new Discord.MessageEmbed().setAuthor("Kullanıcı Adı Değişikliği!", member.user.avatarURL({dynamic: true})).addField("Eski Kullanıcı Adı", `${oldNickname || member.user}`, true).addField("Yeni Kullanıcı Adı", `${newNickname || member.user}`, true)
    logkanal.send({ embeds: [isimdegisti] })
  });

  client.on("messageDelete", async (message) => {
    if(message.author.bot) return;
    if(message.channel.id == config.onerikanali) return;
    const logs = message.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const entry = await message.guild.fetchAuditLogs({ type: "MESSAGE_DELETE" }).then(audit => audit.entries.first())
    user = ""
      if (entry.extra.channel.id === message.channel.id
        && (entry.target.id === message.author.id)
        && (entry.createdTimestamp > (Date.now() - 5000))
        && (entry.extra.count >= 1)) {
      user = entry.executor
    }
  
    else { 
      user = message.author
    }
    const mesajsilindi = new Discord.MessageEmbed().setAuthor("Mesaj Silindi!", message.author.avatarURL({dynamic: true})).addField("Mesaj Sahibi", `${message.author}`).addField("Silinen Mesaj", `${message}`).addField("Bulunduğu Kanal", `${message.channel}`)
    logs.send({ embeds: [mesajsilindi] })
  })
  
  client.on("messageContentEdited", (message, oldContent, newContent) => {
    if(message.author.bot) return;
    const logkanal = message.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const mesajduzenlendi = new Discord.MessageEmbed().setAuthor("Mesaj Düzenlendi!", message.member.user.avatarURL({dynamic: true})).addField("Mesaj Sahibi", `${message.member}`).addField("Eski Hali", `${oldContent}`).addField("Yeni Hali", `${newContent}`)
    logkanal.send({ embeds: [mesajduzenlendi] })
  });
  
  client.on("voiceChannelJoin", (member, channel) => {
    if(member.user.bot) return;
    const logkanal = member.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const sesegirildi = new Discord.MessageEmbed().setAuthor("Kişi Ses Kanalına Katıldı!", member.user.avatarURL({dynamic: true})).setDescription(`${member.user} adlı üye ${channel} isimli ses kanalına katıldı!`)
    logkanal.send({ embeds: [sesegirildi] })
  });
  
  client.on("voiceChannelLeave", (member, channel) => {
    if(member.user.bot) return;
    const logkanal = member.guild.channels.cache.find(kanal => kanal.id === config.logchannel);
    const sestencikildi = new Discord.MessageEmbed().setAuthor("Kişi Ses Kanalından Ayrıldı!", member.user.avatarURL({dynamic: true})).setDescription(`${member.user} adlı üye ${channel} isimli ses kanalından ayrıldı!`)
    logkanal.send({ embeds: [sestencikildi]})
  });
/************** LOG **************/

/************** ALTYAPI **************/
const commander = fs.readdirSync('./commands').filter(files => files.endsWith('.js'));
for (const files of commander) {
	const command = require(`./commands/${files}`);
    client.commands.set(command.name, command);
    const date = new Date()
    console.log("["+ moment(date).format("DD/MM/YYYY HH:mm") + "]:" + command.name + " isimli komut yüklendi!")
}
const requestEvent = (event) => require(`./events/${event}`)
client.on('messageCreate', (messageCreate) => requestEvent('message')(messageCreate,client));
client.login(config.token)
/************** ALTYAPI **************/