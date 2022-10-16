const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kda')
        .setDescription('kda')
        .addStringOption(option =>
        option.setName("bg_id")
            .setDescription("배틀그라운드 ID를 입력해 주세요.")
            .setRequired(true)),
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) {
            return;
        }

        const battleGroundId = interaction.options._hoistedOptions[0].value;
        const response = await axios.get(`http://localhost:3000/api/pubg?playerId=${battleGroundId}`);

        await interaction.reply('Pong!');
    },
};