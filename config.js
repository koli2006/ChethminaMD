const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aFhmDDCI#RYhS71FCrnKSCeRbpqeAUUuPlMtuT5nU_5NV1x_DtgY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/8124133c3f031b0b5acb1.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm ChethminaMD. My owner is Chethmina Kavishan"
};
