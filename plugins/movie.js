const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "movie",
    react: "📥",
    description: "movie downloader",
    use: ".movie kgf",
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
    if (!q) { return await reply('*Please provide a direct URL!*')}
    try {

const data0 = await fetchJson(`https://darksadas-yt-sinhalasub-search.vercel.app/?q=${q}`);   

const data1 = data0.result.data[0].link
console.log(data1)

const data = await fetchJson(`https://darksadas-yt-sinhalasub-info-dl.vercel.app/?url=${data1}`);   	    
const data2 = data.result.data.pixeldrain_dl[2].link
console.log(data2)
    
const cap = `        
test abc
fhdf
`	    
await conn.sendMessage(from, {text: `sdcgghhhh` })


	    
        const message = {
            document: await getBuffer(data2),
	    caption: `test`,
            mimetype: "video/mp4",
            fileName: `${datas}🎬DARK SHUTER🎬.mp4`,
        };


	    
        await conn.sendMessage(from, message );

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
