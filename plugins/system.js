const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check bot system status",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `📊𝗖𝗞𝗠𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗦𝗧𝗔𝗧𝗨𝗦📊

🕑ℝ𝕦𝕟𝕥𝕚𝕞𝕖:  ${runtime(process.uptime())}
🧮ℝ𝕒𝕞 𝕌𝕤𝕒𝕘𝕖: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🖥ℍ𝕠𝕤𝕥: ${os.hostname()}
👨🏻‍💻𝕆𝕨𝕟𝕖𝕣: Chethmina Kavishan


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*
`

return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})


