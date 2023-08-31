const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com 'pong' - serve para testar se o bot está funcionando"),

async execute(interaction){
    await interaction.reply("Pong!")
}

}
