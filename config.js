const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aFhmDDCI#RYhS71FCrnKSCeRbpqeAUUuPlMtuT5nU_5NV1x_DtgY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://envs.sh/8HL.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "◅          🧙🏻‍♂️𝗖𝗛𝗘𝗧𝗛𝗠𝗜𝗡𝗔 𝗠𝗗🧙🏻‍♂️          ▻\n\n*Hey there I'm alive now! 💐*\n\nʜᴇʀᴇ'ꜱ ᴡʜᴀᴛ ᴄᴀɴ ɪ ᴅᴏ👇🏻\n* *ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢ & ᴠɪᴅᴇᴏ📥*\n* *ꜰᴇᴛᴄʜ ʟᴀᴛᴇꜱᴛ ɴᴇᴡꜱ📰*\n* *ᴍᴀɴᴀɢᴇ ɢʀᴏᴜᴘ👮🏻‍♂️*\n* *ᴅᴏᴡɴʟᴏᴀᴅ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ, ᴍᴇᴀᴅɪᴀꜰɪʀᴇ ꜰɪʟᴇꜱ🗂️*\n\n*Type _.menu_ to get full commands list 📃*\n\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*",
MODE: process.env.MODE || "public",
};
