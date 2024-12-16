
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

        if (!response.data.success) {
            return reply("Failed to fetch the latest Sirasa news. Please try again later.");
        }

        const newsData = response.data.data;

        
        const { title, date, link, image, details } = newsData;
        const { description1, description2, description3 } = details;

        
        const newsMessage = `📰 *${title}*\n\n${description1}\n${description2}\n${description3}\n\n*📅 Date & Time:* ${date}\n\n🔗 Read More: (https://www.newsfirst.lk${link})\n\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*`;

        
        await conn.sendMessage(from, { image: { url: image }, caption: newsMessage });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

        
