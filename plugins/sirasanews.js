const { cmd, commands } = require('../command')
const axios = require('axios');


cmd({
    pattern: "sirasa",
    alias: ["sirasanews"],
    desc: "Get the latest Sirasa news.",
    category: "News",
    react: "📰",
    use: '.sirasa',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
       
        const apiUrl = "https://darksadas-yt-sirasa-news.vercel.app/";

       
        const response = await axios.get(apiUrl);

        
        if (!response.data.status) {
            return reply("Failed to fetch the latest Sirada news. Please try again later.");
        }

        
        const { title, image, date, time, url, desc } = response.data.result;

        
        const newsMessage = `📰 *${title}*\n\n${desc}\n\n*📅 Date:* ${date}\n*🕒 Time:* ${time}\n\n🔗 Read More: (${url})\n\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*`;

       
        await conn.sendMessage(from, { image: { url: image }, caption: newsMessage });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
