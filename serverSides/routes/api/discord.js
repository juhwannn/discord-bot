console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_BOT_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

module.exports = router;