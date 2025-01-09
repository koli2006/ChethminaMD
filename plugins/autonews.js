const {
  cmd
} = require("../command");
const axios = require('axios');
let activeGroups = {};
let lastNewsTitles = {
  'hiru': {},
  'sirasa': {},
  'derana': {}
};
async function getHiruNews() {
  try {
    const _0x4aab09 = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/hiru');
    if (_0x4aab09.data.status) {
      const _0x583600 = _0x4aab09.data.result;
      return {
        'title': _0x583600.title,
        'content': _0x583600.desc,
        'date': _0x583600.date,
        'url': _0x583600.url,
        'image': _0x583600.image
      };
    }
    return null;
  } catch (_0x4592dd) {
    console.error("Error fetching Hiru News: " + _0x4592dd.message);
    return null;
  }
}
async function getSirasaNews() {
  try {
    const _0x26b7d3 = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/sirasa');
    if (_0x26b7d3.data.status) {
      const _0x2f0f97 = _0x26b7d3.data.result;
      return {
        'title': _0x2f0f97.title,
        'content': _0x2f0f97.desc,
        'date': _0x2f0f97.date,
        'url': _0x2f0f97.url,
        'image': _0x2f0f97.image
      };
    }
    return null;
  } catch (_0x4c4814) {
    console.error("Error fetching Sirasa News: " + _0x4c4814.message);
    return null;
  }
}
async function getDeranaNews() {
  try {
    const _0x5d716c = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/derana');
    if (_0x5d716c.data.status) {
      const _0x3d331a = _0x5d716c.data.result;
      return {
        'title': _0x3d331a.title,
        'content': _0x3d331a.desc,
        'date': _0x3d331a.date,
        'url': _0x3d331a.url,
        'image': _0x3d331a.image
      };
    }
    return null;
  } catch (_0x457dc6) {
    console.error("Error fetching Derana News: " + _0x457dc6.message);
    return null;
  }
}
async function sendNews(_0x3db97e, _0xd0ba87, _0x165a1d, _0x34968c) {
  if (_0x165a1d) {
    if (lastNewsTitles[_0x34968c][_0xd0ba87] !== _0x165a1d.title) {
      lastNewsTitles[_0x34968c][_0xd0ba87] = _0x165a1d.title;
      let _0x10ee33 = "📰 *" + _0x34968c + " News*\n\n*Title:* " + _0x165a1d.title + "\n\n*Description:* " + _0x165a1d.content + "\n\n*Published On:* " + _0x165a1d.date;
      if (_0x165a1d.url) {
        _0x10ee33 += "\n\n*Read more:* " + _0x165a1d.url;
      }
      _0x10ee33 += "\n\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*";
      if (_0x165a1d.image) {
        await _0x3db97e.sendMessage(_0xd0ba87, {
          'image': {
            'url': _0x165a1d.image
          },
          'caption': _0x10ee33
        });
      } else {
        await _0x3db97e.sendMessage(_0xd0ba87, {
          'text': _0x10ee33
        });
      }
    }
  }
}
async function checkAndPostNews(_0x458d28, _0x1665ca) {
  const _0x1b04d2 = await getHiruNews();
  const _0x309b45 = await getSirasaNews();
  const _0x11cf31 = await getDeranaNews();
  await sendNews(_0x458d28, _0x1665ca, _0x1b04d2, "hiru");
  await sendNews(_0x458d28, _0x1665ca, _0x309b45, 'sirasa');
  await sendNews(_0x458d28, _0x1665ca, _0x11cf31, "derana");
}
cmd({
  'pattern': "startnews",
  'desc': "Enable Sri Lankan news updates in this group",
  'isGroup': true,
  'react': '📰',
  'filename': __filename
}, async (_0x3b6098, _0x4dcf47, _0x1719fd, {
  from: _0x30420a,
  isGroup: _0x25fe00,
  participants: _0x3d42f5
}) => {
  try {
    const _0x3f23a7 = _0x3d42f5.some(_0x5a8304 => _0x5a8304.id === _0x4dcf47.sender && _0x5a8304.admin);
    const _0x2ac1bd = _0x4dcf47.sender === _0x3b6098.user.jid;
    if (_0x3f23a7 || _0x2ac1bd) {
      if (!activeGroups[_0x30420a]) {
        activeGroups[_0x30420a] = true;
        await _0x3b6098.sendMessage(_0x30420a, {
          'text': "📰 24/7 News Activated."
        });
        if (!activeGroups.interval) {
          activeGroups.interval = setInterval(async () => {
            for (const _0x53db7a in activeGroups) {
              if (activeGroups[_0x53db7a] && _0x53db7a !== 'interval') {
                await checkAndPostNews(_0x3b6098, _0x53db7a);
              }
            }
          }, 0xea60);
        }
      } else {
        await _0x3b6098.sendMessage(_0x30420a, {
          'text': "📰 24/7 News Already Activated."
        });
      }
    } else {
      await _0x3b6098.sendMessage(_0x30420a, {
        'text': "🚫 This command can only be used by group admins or the bot owner."
      });
    }
  } catch (_0x5a4025) {
    console.error("Error in startnews command: " + _0x5a4025.message);
    await _0x3b6098.sendMessage(_0x30420a, {
      'text': "Failed to activate the news service."
    });
  }
});
cmd({
  'pattern': "stopnews",
  'desc': "Disable Sri Lankan news updates in this group",
  'isGroup': true,
  'react': '🛑',
  'filename': __filename
}, async (_0x336e9e, _0xafdd1a, _0x59f058, {
  from: _0x9b72f0,
  isGroup: _0x3e4baf,
  participants: _0x45283c
}) => {
  try {
    const _0x2b8fc9 = _0x45283c.some(_0x2e382a => _0x2e382a.id === _0xafdd1a.sender && _0x2e382a.admin);
    const _0x3a4381 = _0xafdd1a.sender === _0x336e9e.user.jid;
    if (_0x2b8fc9 || _0x3a4381) {
      if (activeGroups[_0x9b72f0]) {
        delete activeGroups[_0x9b72f0];
        await _0x336e9e.sendMessage(_0x9b72f0, {
          'text': "🛑 24/7 News Deactivated."
        });
        if (Object.keys(activeGroups).length === 0x1 && activeGroups.interval) {
          clearInterval(activeGroups.interval);
          delete activeGroups.interval;
        }
      } else {
        await _0x336e9e.sendMessage(_0x9b72f0, {
          'text': "🛑 24/7 News is not active in this group."
        });
      }
    } else {
      await _0x336e9e.sendMessage(_0x9b72f0, {
        'text': "🚫 This command can only be used by group admins or the bot owner."
      });
    }
  } catch (_0x3a2cd5) {
    console.error("Error in stopnews command: " + _0x3a2cd5.message);
    await _0x336e9e.sendMessage(_0x9b72f0, {
      'text': "Failed to deactivate the news service."
    });
  }
});
