const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Purple")
	.setTitle("Comandos do Yarn")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn init', value: 'Cria um novo projeto', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn install', value: 'Instala todas as dependencias do projeto', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn add [nome-do-pacote]', value: 'Instala uma nova dependencia do projeto', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn remove [nome-do-pacote]', value: 'Remove uma dependencia do projeto', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn run [script]', value: 'Roda um script', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn cache clean', value: 'Remove os pacotes mais utilizados do cache - nao instala de forma offline mais', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: '$ yarn info [nome-do-pacote]', value: 'Ver informações relacionadas aos pacotes', inline: true },
		
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("yarn")
        .setDescription("Relembrar comandos do Yarn"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}