const {cmd , commands} = require('../command')
const movie = require('mrnima-moviedl')


cmd({
    pattern: "movie",
    desc: "Download movies",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me movie name")
const search = await movie(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎥𝗖𝗞 𝗬𝗧 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*
`
await conn.sendMessage(from,{message:desc},{quoted:mek});


//send video+document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> 👨🏻‍💻ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
