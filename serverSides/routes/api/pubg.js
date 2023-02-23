console.log(`${__filename}:1`);

const pubg = require('pubg.js');
const express = require('express');
const router = express.Router();

const pubgApiKey = process.env.PUBG_API_KEY;
const shard = process.env.SHARD;

const client = new pubg.Client(pubgApiKey, shard);

const getPlayer = (playerId) => new pubg.Player(playerId, client);
const getPlayer2 = (playerId) => client.getPlayer({id: playerId}, shard);
const getSeasons = () => client.getSeasons(shard);
const getPlayerSeason = (player, season) => client.getPlayerSeason(player, season, shard);

router.get("/", (req, res) => {
    try {
        const playerId = req.query["playerId"];
        console.log("playerId : " + playerId);
        const test = client.getPlayer({name: playerId}, shard)
            .then(asdf => console.log("asdf : " + JSON.stringify(asdf)))
            .catch(e => console.log("eeeeeee : " + JSON.stringify(e)));


    // Get a single player using their name
        const player = client.getPlayer({name: playerId})
            .then(player => {

            })
            .catch(error => console.log(error));

        const ffff = new pubg.GameModeStats(player);
        console.log(ffff);

        // const player = getPlayer2(playerId);
        //
        // const season = getSeasons();
        // console.log("player.naem");
        // console.log(player);

        // const playerSeason2 = getPlayerSeason(player, season)
        //     .then(test => console.log("asdf" + test));
        // console.log("playerSeason2");
        // console.log(playerSeason2);

        // const asdf = new pubg.GameModeStats(playerSeason2);
        // console.log("asdf")
        // console.log(asdf);


    } catch (e) {
        console.log(e);
    }

    return;
});

module.exports = router;