
const { cmd, commands } = require('../command')
const axios = require('axios');

cmd({
    pattern: "apk",
    alias: ["apkdownload"],
    desc: "Download APKs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, args, reply }) => {
    try {
        if (!args[0]) return reply("Please provide the name of the APK to download.");

        const query = args.join(" ");

        
        await conn.sendMessage(from, { react: { text: '📥', key: mek.key } });

       
        const response = await fetchJson(`https://saviya-kolla-api.up.railway.app/download/apk?q=${encodeURIComponent(query)}`);

        if (!response || !response.status || !response.result) {
            return reply("Failed to fetch APK data. Please check the name or try again later.");
        }

        const { name, package: app_id, lastup: lastUpdate, size, icon, dllink } = response.result;

       
        const apkInfo = `
┌────────────────────────────
├ 📚 *Name* : ${name}
├ 📦 *Package ID* : ${app_id}
├ 📥 *Size* : ${size}
├ ⬆️ *Last update* : ${lastUpdate}
└────────────────────────────


> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*`;

        
        await conn.sendMessage(from, {
            image: { url: icon },
            caption: apkInfo
        }, { quoted: mek });

        
        await conn.sendMessage(from, { react: { text: '📤', key: mek.key } });

        
        await conn.sendMessage(from, {
            document: { url: dllink },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${name}.apk`,
            caption: `> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*`
        }, { quoted: mek });

        
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});
