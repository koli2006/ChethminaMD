const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "autonews",
    desc: "Auto send news",
    category: "main",
    filename: __filename
},
    const axios = require("axios");

let storedLink = null;  

const API_ENDPOINT = "https://vajiraapi-089fa316ec80.herokuapp.com/news/lnw"; 

async function sendNews(title, desc, date) {
    const message = `*${title}*\n\n${desc}\n\n${date}`;
    await conn.sendMessage( 120363354095447928@g.us , { text: message });  
}
 
async function checkForNewsUpdates() {
    try {
        const response = await axios.get(API_ENDPOINT);
        const { link, title, desc, date } = response.data;

        if (storedLink !== link) {  
            await sendNews(title, desc, date);
            
            storedLink = link;
        } 
    } catch (error) {
        console.error("Error fetching API data:", error.message);
    }

    // Re-run the function after a 5-minute delay
    setTimeout(checkForNewsUpdates, 5 * 60 * 1000); // 5 minutes in milliseconds
}
 
checkForNewsUpdates();
