const { cmd } = require('../command');
const Hiru = require('hirunews-scrap');
const Esana = require('@sl-code-lords/esana-news');
const axios = require('axios');
const config = require('../config');

let activeGroups = {};
let lastNewsTitles = {};

async function getLatestNews() {
    let newsData = [];
    
    // Hiru News
    try {
        const hiruApi = new Hiru();
        const hiruNews = await hiruApi.BreakingNews();
        newsData.push({
            title: hiruNews.results.title,
            content: hiruNews.results.news,
            date: hiruNews.results.date,
            url: hiruNews.results.newsURL,
            thumb: hiruNews.results.thumb
        });
    } catch (err) {
        console.error(`Error fetching Hiru News: ${err.message}`);
    }

    
    return newsData;
}

// Function to check for and post new news to the group
async function checkAndPostNews(conn, groupId) {
    const latestNews = await getLatestNews();
    latestNews.forEach(async (newsItem) => {
        if (!lastNewsTitles[groupId]) {
            lastNewsTitles[groupId] = [];
        }

        if (!lastNewsTitles[groupId].includes(newsItem.title)) {
           await conn.sendMessage(groupId, { image: { url: ${newsItem.thumb}, caption: `📰 *${newsItem.title}*\n\n${newsItem.content}\n\n📅 ${newsItem.date}\n🔗Read More: ${newsItem.url}\n\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*` }, { quoted: mek });
            lastNewsTitles[groupId].push(newsItem.title);

            if (lastNewsTitles[groupId].length > 100) {
                lastNewsTitles[groupId].shift();
            }
        }
    });
}


// Command to activate the general news service in the group
cmd({
    pattern: "startnews",
    desc: "Enable Sri Lankan news updates in this group",
    isGroup: true,
    react: "📰",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
    try {
        if (isGroup) {
            const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
            const isBotOwner = mek.sender === conn.user.jid;

            if (isAdmin || isBotOwner) {
                if (!activeGroups[from]) {
                    activeGroups[from] = true;

                    await conn.sendMessage(from, { text: "🇱🇰 Auto 24/7 News Activated.\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*" });

                    if (!activeGroups['interval']) {
                        activeGroups['interval'] = setInterval(async () => {
                            for (const groupId in activeGroups) {
                                if (activeGroups[groupId] && groupId !== 'interval') {
                                    await checkAndPostNews(conn, groupId);
                                }
                            }
                        }, 60000); // Check for news every 60 seconds
                    }

                } else {
                    await conn.sendMessage(from, { text: "*✅ 24/7 News Already Activated.*" });
                }
            } else {
                await conn.sendMessage(from, { text: "🚫 This command can only be used by group admins or the bot owner." });
            }
        } else {
            await conn.sendMessage(from, { text: "This command can only be used in groups." });
        }
    } catch (e) {
        console.error(`Error in news command: ${e.message}`);
        await conn.sendMessage(from, { text: "Failed to activate the news service." });
    }
});

// stop send news 
cmd({
    pattern: "stopnews",
    desc: "Disable Sri Lankan news updates in this group",
    isGroup: true,
    react: "🛑",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
    try {
        if (isGroup) {
            const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
            const isBotOwner = mek.sender === conn.user.jid;

            if (isAdmin || isBotOwner) {
                if (activeGroups[from]) {
                    delete activeGroups[from];
                    await conn.sendMessage(from, { text: "*🚫 Disable Sri Lankan news updates in this group*" });

                    if (Object.keys(activeGroups).length === 1 && activeGroups['interval']) {
                        clearInterval(activeGroups['interval']);
                        delete activeGroups['interval'];
                    }
                } else {
                    await conn.sendMessage(from, { text: "🛑 24/7 News is not active in this group." });
                }
            } else {
                await conn.sendMessage(from, { text: "🚫 This command can only be used by group admins or the bot owner." });
            }
        } else {
            await conn.sendMessage(from, { text: "This command can only be used in groups." });
        }
    } catch (e) {
        console.error(`Error in news command: ${e.message}`);
        await conn.sendMessage(from, { text: "Failed to deactivate the news service." });
    }
});
