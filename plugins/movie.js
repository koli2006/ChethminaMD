const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
const fg = require('api-dylux');
const axios = require("axios");
const {
  Buffer
} = require("buffer");
const apkdl = require("../lib/apkdl");
cmd({
  'pattern': "img",
  'desc': "Search and send images from Google with multiple format options.",
  'react': "🖼️",
  'category': "download",
  'filename': __filename
}, async (_0x535903, _0x4bcc54, _0x3bc9b4, {
  from: _0x2700fc,
  reply: _0x1725b7,
  q: _0x931d56,
  pushname: _0x5d187e
}) => {
  try {
    if (!_0x931d56) {
      return _0x1725b7("Please provide a search query for the image.");
    }
    const _0x117d3e = encodeURIComponent(_0x931d56);
    const _0x19d195 = "https://www.googleapis.com/customsearch/v1?q=" + _0x117d3e + "&cx=" + "45b94c5cef39940d1" + "&key=" + "AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU" + '&searchType=image&num=5';
    const _0x929448 = await axios.get(_0x19d195);
    const _0x2ab570 = _0x929448.data;
    if (!_0x2ab570.items || _0x2ab570.items.length === 0x0) {
      return _0x1725b7("No images found for your query.");
    }
    const _0x5f2fbd = "\n\n🌟 Hello, " + (_0x5d187e || "User") + "! 🌟\n\nSearch Query: " + _0x931d56 + "\n\nReply with a number below\n\n1 || Send images in normal format\n\n2 || Send images as document format\n\n> *Made By Dark Cyber Maker ™*";
    const _0x41dc17 = await _0x535903.sendMessage(_0x2700fc, {
      'text': _0x5f2fbd
    }, {
      'quoted': _0x4bcc54
    });
    _0x535903.ev.on("messages.upsert", async _0x59f9e4 => {
      const _0x47524d = _0x59f9e4.messages[0x0];
      if (!_0x47524d.message || !_0x47524d.message.extendedTextMessage) {
        return;
      }
      const _0x5ca41e = _0x47524d.message.extendedTextMessage.text.trim();
      if (_0x47524d.message.extendedTextMessage.contextInfo && _0x47524d.message.extendedTextMessage.contextInfo.stanzaId === _0x41dc17.key.id) {
        if (_0x5ca41e === '1') {
          for (let _0x154014 = 0x0; _0x154014 < _0x2ab570.items.length; _0x154014++) {
            const _0x30b440 = _0x2ab570.items[_0x154014].link;
            const _0x174a41 = await axios.get(_0x30b440, {
              'responseType': 'arraybuffer'
            });
            const _0x350468 = Buffer.from(_0x174a41.data, "binary");
            await _0x535903.sendMessage(_0x2700fc, {
              'image': _0x350468,
              'caption': "\n\n🌟 Image " + (_0x154014 + 0x1) + " from your search! 🌟\n\n        Enjoy these images! 📸\n\n> *Made By Dark Cyber Maker ™* \n\n                            "
            }, {
              'quoted': _0x47524d
            });
          }
        } else {
          if (_0x5ca41e === '2') {
            for (let _0x32cabb = 0x0; _0x32cabb < _0x2ab570.items.length; _0x32cabb++) {
              const _0x3e0680 = _0x2ab570.items[_0x32cabb].link;
              const _0x47b466 = await axios.get(_0x3e0680, {
                'responseType': 'arraybuffer'
              });
              const _0x2a08df = Buffer.from(_0x47b466.data, 'binary');
              await _0x535903.sendMessage(_0x2700fc, {
                'document': _0x2a08df,
                'fileName': "Image_" + (_0x32cabb + 0x1) + '.jpg',
                'mimetype': "image/jpeg",
                'caption': "\n\n🖼️ Image " + (_0x32cabb + 0x1) + " from your search! 🖼️\n\n        Enjoy these images! 📸\n\n> *Made By Dark Cyber Maker ™* \n\n                            "
              }, {
                'quoted': _0x47524d
              });
            }
          } else {
            await _0x535903.sendMessage(_0x2700fc, {
              'text': "❌ Invalid option. Please reply with either 1 or 2."
            }, {
              'quoted': _0x47524d
            });
          }
        }
      }
    });
  } catch (_0x1dc97a) {
    console.error(_0x1dc97a);
    _0x1725b7("Error: " + _0x1dc97a.message);
  }
});
cmd({
  'pattern': "tiktok",
  'alias': ['tt', 'ttdown'],
  'desc': "Download For Tiktok Videos",
  'category': 'download',
  'filename': __filename
}, async (_0x1d9a68, _0x5d5907, _0x1b564b, {
  from: _0x30f9da,
  quoted: _0x96fcef,
  reply: _0x22a89a,
  q: _0x22018d
}) => {
  try {
    if (!_0x22018d) {
      return await _0x22a89a("Please give me tiktok url");
    }
    if (!_0x22018d.includes('tiktok.com')) {
      return await _0x22a89a("This url is invalid");
    }
    const _0x4e4dec = await fetchJson("https://www.dark-yasiya-api.site/download/tiktok?url=" + _0x22018d);
    const _0x5e1cb4 = "🎬 𝗦𝗘𝗢𝗡 𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n*★| TITLE :* " + _0x4e4dec.result.title + "\n\n*★| Author :* " + _0x4e4dec.result.author + "\n\n*★| DURATION :* " + _0x4e4dec.result.duration + "\n\n*★| VIEWS :* " + _0x4e4dec.result.views + "\n\n*★| URL :* " + _0x22018d + "\n\n📥 | Choose Download Format\n\n1. 🎬 With Watermark\n\n2. 📙 Without Watermark\n\n3. 🎧 Audio File\n\n> *Made By Dark Cyber Maker ™*";
    const _0x5ac3a3 = await _0x1d9a68.sendMessage(_0x30f9da, {
      'image': {
        'url': _0x4e4dec.result.cover || ''
      },
      'caption': _0x5e1cb4
    }, {
      'quoted': _0x5d5907
    });
    _0x1d9a68.ev.on("messages.upsert", async _0x533eb8 => {
      const _0x408387 = _0x533eb8.messages[0x0];
      if (!_0x408387.message || !_0x408387.message.extendedTextMessage) {
        return;
      }
      if (_0x408387.message.extendedTextMessage.contextInfo && _0x408387.message.extendedTextMessage.contextInfo.stanzaId === _0x5ac3a3.key.id) {
        const _0x7eff89 = _0x408387.message.extendedTextMessage.text.trim();
        try {
          switch (_0x7eff89) {
            case '3':
              await _0x1d9a68.sendMessage(_0x30f9da, {
                'audio': {
                  'url': _0x4e4dec.result.sound
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x5d5907
              });
              break;
            case '1':
              await _0x1d9a68.sendMessage(_0x30f9da, {
                'video': {
                  'url': _0x4e4dec.result.wmVideo
                },
                'mimetype': "video/mp4",
                'caption': _0x4e4dec.result.title + "\n\nWATERMARK VIDEO ✅\n\n> *Made By Dark Cyber Maker ™*"
              }, {
                'quoted': _0x5d5907
              });
              break;
            case '2':
              await _0x1d9a68.sendMessage(_0x30f9da, {
                'video': {
                  'url': _0x4e4dec.result.hdVideo
                },
                'mimetype': "video/mp4",
                'caption': _0x4e4dec.result.title + "\n\nNO-WATERMARK VIDEO ✅\n\n> *Made By Dark Cyber Maker ™*"
              }, {
                'quoted': _0x5d5907
              });
              break;
            default:
              _0x22a89a("Invalid option. Please select a valid option 🔴");
          }
        } catch (_0x34fcf9) {
          console.log(_0x34fcf9);
          _0x22a89a('' + _0x34fcf9);
        }
      }
    });
  } catch (_0x1af66f) {
    console.log(_0x1af66f);
    _0x22a89a('' + _0x1af66f);
  }
});
cmd({
  'pattern': "mediafire",
  'alias': ['mf', "mfire"],
  'react': '🔥',
  'desc': "Download Your Mediafire Files.",
  'category': 'download',
  'filename': __filename
}, async (_0x4e8235, _0x3649f1, _0x2a88bd, {
  from: _0x28abb4,
  quoted: _0x478c68,
  reply: _0x5b53ec,
  q: _0x885216
}) => {
  try {
    if (!_0x885216) {
      return await _0x5b53ec("Please give me mediafire url");
    }
    if (!_0x885216.includes("mediafire.com")) {
      return await _0x5b53ec("This url is invalid");
    }
    const _0xd26997 = await fetchJson("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x885216);
    const _0x2ac6d0 = "📙 𝗦𝗘𝗢𝗡 𝗠𝗗 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n*★| File Name :* " + _0xd26997.result.fileName + "\n\n*★| File Size :* " + _0xd26997.result.size + "\n\n*★| Upload Date and Time :* " + _0xd26997.result.date + "\n\n> *Made By Dark Cyber Maker ™*";
    await _0x4e8235.sendMessage(_0x28abb4, {
      'image': {
        'url': "https://i.ibb.co/dPw1fHD/mfire.jpg"
      },
      'caption': _0x2ac6d0
    }, {
      'quoted': _0x3649f1
    });
    await _0x4e8235.sendMessage(_0x28abb4, {
      'document': {
        'url': _0xd26997.result.dl_link
      },
      'mimetype': _0xd26997.result.fileType,
      'fileName': _0xd26997.result.fileName,
      'caption': _0xd26997.result.fileName + "\n\n> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x3649f1
    });
  } catch (_0x3786c2) {
    console.log(_0x3786c2);
    _0x5b53ec('' + _0x3786c2);
  }
});
cmd({
  'pattern': "xvideo",
  'alias': ['xvdl', 'xvdown'],
  'react': '🔞',
  'desc': "Download Xvideos.",
  'category': "download",
  'filename': __filename
}, async (_0x1de039, _0x5f4817, _0x28da20, {
  from: _0xfb1131,
  quoted: _0x3d2d24,
  reply: _0x153351,
  q: _0x45cf20
}) => {
  try {
    if (!_0x45cf20) {
      return await _0x153351("Please give me few word !");
    }
    const _0xb8c91a = await fetchJson("https://www.dark-yasiya-api.site/search/xvideo?q=" + _0x45cf20);
    if (_0xb8c91a.result.length < 0x0) {
      return await _0x153351("Not results found !");
    }
    const _0x51dd58 = await fetchJson("https://www.dark-yasiya-api.site/download/xvideo?url=" + _0xb8c91a.result[0x0].url);
    const _0x5051b5 = "💋 𝗦𝗘𝗢𝗡 𝗠𝗗 𝗫𝗩𝗜𝗗𝗘𝗢𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n*★| Video Title :* " + _0x51dd58.result.title + "\n\n*★| Views :* " + _0x51dd58.result.views + "\n\n*★| Like :* " + _0x51dd58.result.like + "\n\n*★| Deslink :* " + _0x51dd58.result.deslike + "\n\n*★| Size :* " + _0x51dd58.result.size + "\n\n> *Made By Dark Cyber Maker ™*";
    await _0x1de039.sendMessage(_0xfb1131, {
      'image': {
        'url': _0x51dd58.result.image || ''
      },
      'caption': _0x5051b5
    }, {
      'quoted': _0x5f4817
    });
    await _0x1de039.sendMessage(_0xfb1131, {
      'document': {
        'url': _0x51dd58.result.dl_link
      },
      'mimetype': 'video/mp4',
      'fileName': _0x51dd58.result.title,
      'caption': "> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x5f4817
    });
  } catch (_0x503dd7) {
    console.log(_0x503dd7);
    _0x153351('' + _0x503dd7);
  }
});
cmd({
  'pattern': 'fb',
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': "download",
  'use': ".gdrive <googledrive link>",
  'filename': __filename
}, async (_0xf9022e, _0x3bf8cc, _0x1397ef, {
  from: _0x18a7ed,
  l: _0x4716a3,
  quoted: _0x4b43b9,
  body: _0xdc9b47,
  isCmd: _0x2309cb,
  command: _0xd28a43,
  args: _0x1ab591,
  q: _0x4e98b7,
  isGroup: _0x126684,
  sender: _0x2a8fba,
  senderNumber: _0x5d3bc2,
  botNumber2: _0x3b0f1e,
  botNumber: _0x7bfca5,
  pushname: _0x39e208,
  isMe: _0x24c693,
  isOwner: _0x396d8b,
  groupMetadata: _0x5d5b58,
  groupName: _0x598a6c,
  participants: _0x191f9c,
  groupAdmins: _0x34cc73,
  isBotAdmins: _0x2d2245,
  isAdmins: _0x47f2b5,
  reply: _0x58d28d
}) => {
  try {
    if (!_0x4e98b7) {
      return await _0x58d28d("*Please give me googledrive url !!*");
    }
    let _0x48e6e6 = await fg.fbdl;
    _0x58d28d("fb downlorder");
    _0xf9022e.sendMessage(_0x18a7ed, {
      'document': {
        'url': _0x48e6e6.downloadUrl
      },
      'fileName': _0x48e6e6.fileName,
      'mimetype': _0x48e6e6.mimetype
    }, {
      'quoted': _0x3bf8cc
    });
  } catch (_0x6e1f4e) {
    _0x58d28d("*Error !!*");
    _0x4716a3(_0x6e1f4e);
  }
});
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download Google Drive Files",
  'category': "download",
  'filename': __filename
}, async (_0x303b77, _0x33ae31, _0xb74742, {
  from: _0x34e208,
  l: _0xda7c8b,
  quoted: _0x126dbf,
  body: _0x145ce3,
  isCmd: _0x3ec93d,
  command: _0x5bdf36,
  args: _0x60b9ee,
  q: _0x31f045,
  isGroup: _0x29e962,
  sender: _0xbb9c3a,
  senderNumber: _0x52d3c1,
  botNumber2: _0x23fe3b,
  botNumber: _0x10c6d4,
  pushname: _0x3303b8,
  isMe: _0x5e4bcc,
  isOwner: _0x135094,
  groupMetadata: _0x4bfafd,
  groupName: _0xb74550,
  participants: _0x4bfc29,
  groupAdmins: _0x391a2c,
  isBotAdmins: _0x460969,
  isAdmins: _0x41eb0a,
  reply: _0x3652cf
}) => {
  try {
    if (!_0x31f045) {
      return await _0x3652cf("*Please give me googledrive url !!*");
    }
    let _0xc716df = await fg.GDriveDl(_0x31f045);
    _0x3652cf("*📃 File name:*  " + _0xc716df.fileName + "\n\n*💈 File Size:* " + _0xc716df.fileSize + "\n\n*🕹️ File type:* " + _0xc716df.mimetype + "\n\n> *Made By Dark Cyber Maker ™*");
    _0x303b77.sendMessage(_0x34e208, {
      'document': {
        'url': _0xc716df.downloadUrl
      },
      'fileName': _0xc716df.fileName,
      'mimetype': _0xc716df.mimetype
    }, {
      'quoted': _0x33ae31
    });
  } catch (_0x13804b) {
    _0x3652cf("*Error !!*");
    _0xda7c8b(_0x13804b);
  }
});
cmd({
  'pattern': "twitter",
  'alias': ['x', "twit", "twitterdl"],
  'react': '🌀',
  'desc': "Download For Twitter",
  'category': "download",
  'filename': __filename
}, async (_0x30b621, _0x330f83, _0xcd29c0, {
  from: _0x34ec03,
  l: _0x28e891,
  prefix: _0x29de41,
  quoted: _0x1cc423,
  body: _0x9001ab,
  isCmd: _0x218a39,
  command: _0x36fb6d,
  args: _0x40392b,
  q: _0x2fec1c,
  isGroup: _0x5c9e9c,
  sender: _0xef5a6e,
  senderNumber: _0x5cb900,
  botNumber2: _0x1e3d01,
  botNumber: _0x47df83,
  pushname: _0xd891ea,
  isMe: _0x178caf,
  isOwner: _0x301e05,
  groupMetadata: _0x3e9aff,
  groupName: _0x29ef8d,
  participants: _0x164f2b,
  groupAdmins: _0x5577ce,
  isBotAdmins: _0x510166,
  isAdmins: _0x2aeb4c,
  reply: _0x5724c0
}) => {
  try {
    const _0x4da5ce = await fetchJson('https://www.dark-yasiya-api.site/download/twitter?url=/download/twitter?url=' + _0x2fec1c);
    let _0x37a97d = "📹 𝗦𝗘𝗢𝗡 𝗠𝗗 𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n*★| Title :* " + _0x4da5ce.result.desc + "\n\n> *Made By Dark Cyber Maker ™*\n\n";
    const _0x42a7f4 = await _0x30b621.sendMessage(_0x34ec03, {
      'image': {
        'url': tiktok.result.cover || ''
      },
      'caption': _0x37a97d
    }, {
      'quoted': _0x330f83
    });
    _0x30b621.ev.on("messages.upsert", async _0x16e577 => {
      const _0x424067 = _0x16e577.messages[0x0];
      if (!_0x424067.message || !_0x424067.message.extendedTextMessage) {
        return;
      }
      if (_0x424067.message.extendedTextMessage.contextInfo && _0x424067.message.extendedTextMessage.contextInfo.stanzaId === _0x42a7f4.key.id) {
        const _0x478c2f = _0x424067.message.extendedTextMessage.text.trim();
        try {
          switch (_0x478c2f) {
            case '1':
              await _0x30b621.sendMessage(_0x34ec03, {
                'video': {
                  'url': _0x4da5ce.result.video_sd
                },
                'mimetype': "video/mp4",
                'caption': "SD VIDEO ✅\n\n> *Made By Dark Cyber Maker ™*"
              }, {
                'quoted': _0x330f83
              });
              break;
            case '2':
              await _0x30b621.sendMessage(_0x34ec03, {
                'video': {
                  'url': _0x4da5ce.result.video_hd
                },
                'mimetype': 'video/mp4',
                'caption': "HD VIDEO ✅\n\n> *Made By Dark Cyber Maker ™*"
              }, {
                'quoted': _0x330f83
              });
              break;
            default:
              _0x5724c0("Invalid option. Please select a valid option 🔴");
          }
        } catch (_0x62aa57) {
          console.log(_0x62aa57);
          _0x5724c0('' + _0x62aa57);
        }
      }
    });
  } catch (_0x4a3f81) {
    console.log(_0x4a3f81);
    _0x5724c0('' + _0x4a3f81);
  }
});
cmd({
  'pattern': 'logo',
  'desc': "Create Your Logo.",
  'category': "download",
  'filename': __filename
}, async (_0x23a403, _0x497d76, _0x376228, {
  from: _0xaaa059,
  quoted: _0x465b29,
  body: _0x10edcf,
  isCmd: _0x4f7664,
  command: _0x4a9388,
  args: _0x363aac,
  q: _0x532047,
  isGroup: _0x5901e8,
  sender: _0x25a60c,
  senderNumber: _0x4ecd10,
  botNumber2: _0x26b640,
  botNumber: _0x4be6af,
  pushname: _0x5c0efd,
  isMe: _0x261fc0,
  isOwner: _0x39b217,
  groupMetadata: _0x37c457,
  groupName: _0x10afc7,
  participants: _0x2c5592,
  groupAdmins: _0x3c06ee,
  isBotAdmins: _0x17c91c,
  isAdmins: _0x1506c8,
  reply: _0x51259e
}) => {
  try {
    const _0x4d6866 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=" + _0x532047);
    await _0x23a403.sendMessage(_0xaaa059, {
      'image': {
        'url': _0x4d6866.result.download_url
      },
      'caption': "> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x497d76
    });
  } catch (_0x477ffd) {
    console.log(_0x477ffd);
    await _0x23a403.sendMessage(_0xaaa059, {
      'react': {
        'text': '❌',
        'key': _0x497d76.key
      }
    });
    _0x51259e('' + _0x477ffd);
  }
});
cmd({
  'pattern': "xnxx",
  'alias': ["xndl", "xvdown"],
  'react': '🔞',
  'desc': "Download Xnxx Videos.",
  'category': "download",
  'filename': __filename
}, async (_0x484573, _0x5444ad, _0x30dd2e, {
  from: _0x2a3723,
  quoted: _0x2435b2,
  reply: _0x27a70b,
  q: _0x510f13
}) => {
  try {
    if (!_0x510f13) {
      return await _0x27a70b("Please give me few word !");
    }
    const _0x17cf5b = await fetchJson("https://nsfw-pink-venom.vercel.app/api/xnxx/search?query=" + _0x510f13);
    if (_0x17cf5b.result.length < 0x0) {
      return await _0x27a70b("Not results found !");
    }
    const _0x324ebe = await fetchJson("https://nsfw-pink-venom.vercel.app/api/xnxx/download?url=" + _0x17cf5b.result[0x0].url);
    await _0x484573.sendMessage(_0x2a3723, {
      'image': {
        'url': _0x324ebe.result.image || ''
      },
      'caption': "💋 𝗦𝗘𝗢𝗡 𝗠𝗗 𝗫𝗡𝗫𝗫 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x5444ad
    });
    await _0x484573.sendMessage(_0x2a3723, {
      'document': {
        'url': _0x324ebe.result.files.hight
      },
      'mimetype': 'video/mp4',
      'fileName': _0x324ebe.result.title,
      'caption': "> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x5444ad
    });
    await _0x484573.sendMessage(_0x2a3723, {
      'document': {
        'url': _0x324ebe.result.files.low
      },
      'mimetype': "video/mp4",
      'fileName': _0x324ebe.result.title,
      'caption': "> *Made By Dark Cyber Maker ™*"
    }, {
      'quoted': _0x5444ad
    });
  } catch (_0x5328a1) {
    console.log(_0x5328a1);
    _0x27a70b('' + _0x5328a1);
  }
});
cmd({
  'pattern': "downjid",
  'react': '✔️',
  'desc': "Movie Searcher",
  'category': "downlord",
  'filename': __filename
}, async (_0x5bd7f2, _0x2d8e3d, _0x25d95e, {
  from: _0x1ddc47,
  l: _0xae3772,
  quoted: _0x32dcf6,
  body: _0x319ffd,
  isCmd: _0x117c97,
  command: _0x265ab8,
  mentionByTag: _0x3b9e99,
  db_pool: _0x5d0d45,
  args: _0x3de702,
  q: _0x439b31,
  isGroup: _0x352627,
  sender: _0x59ea1f,
  senderNumber: _0x29587e,
  botNumber2: _0x184cd4,
  botNumber: _0x2f389e,
  pushname: _0x202282,
  isMe: _0x2b3dcf,
  isOwner: _0x392ded,
  groupMetadata: _0x5a90e3,
  groupName: _0x15c3f2,
  participants: _0xf2d528,
  groupAdmins: _0x306d64,
  isBotAdmins: _0x6ac03e,
  isCreator: _0xadab9,
  isDev: _0x2ffacf,
  isAdmins: _0x12eb17,
  reply: _0x3e9143
}) => {
  try {
    if (!_0x25d95e.quoted) {
      return _0x3e9143("*ℹ Please mention a Derect Link*");
    }
    if (!_0x439b31) {
      return;
    }
    const _0x4157eb = _0x439b31.split(" & ")[0x0];
    const _0x5312bd = _0x439b31.split(" & ")[0x1];
    await _0x5bd7f2.sendMessage(_0x4157eb, {
      'document': {
        'url': _0x25d95e.quoted.msg
      },
      'caption': "\n" + _0x5312bd + "\n> *Made By Dark Cyber Maker ™*",
      'mimetype': 'video/mp4',
      'fileName': "🎬 SEON-MD 🎬\n" + _0x5312bd + ".mp4"
    });
  } catch (_0x55cf00) {
    _0x3e9143("❗ Error" + _0x55cf00);
    _0xae3772(_0x55cf00);
  }
});
cmd({
  'pattern': 'apk',
  'react': '📱',
  'desc': "Download For Apk.",
  'category': "download",
  'filename': __filename
}, async (_0x48c64d, _0x5c6e6e, _0x351202, {
  from: _0x5d3309,
  l: _0x3919ca,
  quoted: _0x46e795,
  body: _0x252e8f,
  isCmd: _0xd54984,
  command: _0x5bc09a,
  args: _0x16c6cb,
  q: _0x3b7e79,
  isGroup: _0x4cd4ce,
  sender: _0xdc8e9b,
  senderNumber: _0x3a475e,
  botNumber2: _0x3c289e,
  botNumber: _0x13ebb6,
  pushname: _0x25b206,
  isMe: _0x33e761,
  isOwner: _0x43152b,
  groupMetadata: _0x287559,
  groupName: _0x4935dc,
  participants: _0x56ed14,
  groupAdmins: _0x2dc0ef,
  isBotAdmins: _0x573120,
  isAdmins: _0x39b9dd,
  reply: _0x480cdd
}) => {
  try {
    await _0x48c64d.sendMessage(_0x5d3309, {
      'react': {
        'text': '📥',
        'key': _0x5c6e6e.key
      }
    });
    if (!_0x3b7e79) {
      return await _0x48c64d.sendMessage(_0x5d3309, {
        'text': "Need apk link..."
      }, {
        'quoted': _0x5c6e6e
      });
    }
    const _0x4b1755 = await apkdl.download(_0x3b7e79);
    let _0x39caa0 = "🎮 𝗦𝗘𝗢𝗡 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📙\n\n★| Name : " + _0x4b1755.name + "\n\n★| Developer : " + _0x4b1755["package"] + "\n\n★| Last update : " + _0x4b1755.lastup + "\n\n★| Size : " + _0x4b1755.size + "\n\n> *Made By Dark Cyber Maker ™*";
    await _0x48c64d.sendMessage(_0x5d3309, {
      'image': {
        'url': _0x4b1755.icon
      },
      'caption': _0x39caa0
    }, {
      'quoted': _0x5c6e6e
    });
    let _0x4f191b = await _0x48c64d.sendMessage(_0x5d3309, {
      'document': {
        'url': _0x4b1755.dllink
      },
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x4b1755.name + '.' + "apk",
      'caption': ''
    }, {
      'quoted': _0x5c6e6e
    });
    await _0x48c64d.sendMessage(_0x5d3309, {
      'react': {
        'text': '📁',
        'key': _0x4f191b.key
      }
    });
    await _0x48c64d.sendMessage(_0x5d3309, {
      'react': {
        'text': '✔',
        'key': _0x5c6e6e.key
      }
    });
  } catch (_0x117ae4) {
    console.log(_0x117ae4);
    _0x480cdd('' + _0x117ae4);
  }
});
