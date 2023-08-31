const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("conteudos_estudados")
        .setDescription("Acesse o notion com todos suas anotações de conteúdos estudados"),

    async execute(interaction) {
        await interaction.reply("https://mature-basil-76a.notion.site/Forma-o-cc7b09087a96422f8c86cc3ab6937c47?pvs=4")
    }
}