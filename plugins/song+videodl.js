const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎧𝗖𝗞 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🎧

🔖𝕋𝕚𝕥𝕝𝕖: *${data.title}*
⏰𝔻𝕦𝕣𝕒𝕥𝕚𝕠𝕟: *${data.timestamp}*
📆𝕌𝕡𝕝𝕠𝕒𝕕𝕖𝕕: *${data.ago}*
👀𝕍𝕚𝕖𝕨𝕤: *${data.views}*
🤵🏻𝔸𝕦𝕥𝕙𝕠𝕣: *${data.author.name}*
🔗𝕃𝕚𝕟𝕜: *${data.url}*


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio+document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> 👨🏻‍💻ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//==========video-dl==========

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎥𝗖𝗞 𝗬𝗧 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🎥

🔖𝕋𝕚𝕥𝕝𝕖: *${data.title}*
⏰𝔻𝕦𝕣𝕒𝕥𝕚𝕠𝕟: *${data.timestamp}*
📆𝕌𝕡𝕝𝕠𝕒𝕕𝕖𝕕: *${data.ago}*
👀𝕍𝕚𝕖𝕨𝕤: *${data.views}*
🤵🏻𝔸𝕦𝕥𝕙𝕠𝕣: *${data.author.name}*
🔗𝕃𝕚𝕟𝕜: *${data.url}*


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> 👨🏻‍💻ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
