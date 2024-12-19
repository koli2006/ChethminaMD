const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    react: "📊",
    desc: "Check bot system status",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `📊𝗖𝗞𝗠𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗦𝗧𝗔𝗧𝗨𝗦📊

🕑ʀᴜɴᴛɪᴍᴇ:  ${runtime(process.uptime())}
🧮ʀᴀᴍ ᴜꜱᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🖥ʜᴏꜱᴛ: ${os.hostname()}
👨🏻‍💻ᴏᴡɴᴇʀ: Chethmina Kavishan


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*
`

return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})


