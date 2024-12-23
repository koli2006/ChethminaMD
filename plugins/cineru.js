const {
    Sparky,
    isPublic
} = require("../lib/plugins.js");
let gis = require("g-i-s");
const axios = require('axios');
const fetch = require('node-fetch');
const {
    API
} = require("../config.js");

Sparky(
    {
        name: "gdrive",
        fromMe: isPublic,
        desc: "Instagram story downloader",
        category: "downloader",
    },
    async ({
        m, client, args
    }) => {
        args = args || m.quoted?.text;
        if (!args) return await m.reply("_Enter Link_");
        var document = await fetch(`${API}/api/downloader/gdrive?url=${args}`);
        var zip = await document.json();
        client.sendMessage(form, { document: { url: zip.data.downloadUrl }, fileName: `${zip.data.fileName}`, mimetype: "application/x-zip-compressed" }, { quoted: mek })
    }
);
