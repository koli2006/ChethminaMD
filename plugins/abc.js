//PRABATH YT BASE SUPPORT ❤️‍🔥

// 𝙿𝙾𝚆𝙴𝚁𝙳  𝙱𝚈  𓄂𝐎ᴡͥɳͣᴇͫᴙ  𝐂ʏ͢ʙᴇʀ  𝚇 Aʏ͢ᴇꜱʜ

const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "fit",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isMe, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }
  const data = q.split("±")[0]
        const datas = q.split("±")[1]



    try {
 
		



        const mediaUrl = data.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');




        const message = {
            document: mediaBuffer,
	    caption: `${datas}
     
 *Darksadas YT*`,
            mimetype: "video/mp4",
            fileName: `${datas}🎬PODDA-X-MD🎬.mp4`,
        };

        await conn.sendMessage(config.JID, message);

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
