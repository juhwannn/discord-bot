require('dotenv').config();

const { REST, Routes } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');

const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

commandFiles.map(file => {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    console.log("deploy-commands file command name : ", command?.data?.name);
    commands.push(command.data.toJSON());
});

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(data => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);