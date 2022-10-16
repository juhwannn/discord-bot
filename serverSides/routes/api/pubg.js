console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

const pubg = require('pubg.js');
const pubgApiKey = process.env.PUBG_API_KEY;
const client = new pubg.Client(pubgApiKey, 'kakao');


router.get("/", (req, res) => {
    const playerId = req.query["playerId"]

    console.log("playerId : " + playerId);
    // Get a single player using their name
    const player = client.getPlayer({name: playerId})
        .then(player => console.log(player))
        .catch(error => console.log(error));
    console.log("player :");
    console.log(player);

});

module.exports = router;