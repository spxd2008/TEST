const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "session id"
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*нєу ι'м αℓινє ησω!☺️*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
