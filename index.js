const axios = require("axios")
const urls = ["https://glitch.com/edit/#!/join/307d5b02-81e9-4d38-8e40-cf9c684a8794"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);

