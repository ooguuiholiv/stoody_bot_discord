const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("permissoes")
    .setDescription("Mostra as permissões do bot no canal atual"),

  async execute(interaction) {
    const botMember = await interaction.guild.members.fetchMe();
    const channel = interaction.channel;

    const permissions = channel.permissionsFor(botMember);

    const permsList = [
      "ViewChannel",
      "SendMessages",
      "ManageMessages",
      "EmbedLinks",
      "AttachFiles",
      "ReadMessageHistory",
      "MentionEveryone",
      "ManageChannels",
      "ManageRoles",
      "Administrator",
    ];

    const granted = permsList
      .filter((perm) => permissions.has(perm))
      .map((p) => `✅ ${p}`);
    const denied = permsList
      .filter((perm) => !permissions.has(perm))
      .map((p) => `❌ ${p}`);

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("Permissões do Bot nesse Canal")
      .addFields(
        {
          name: "✅ Permissões Concedidas",
          value: granted.length ? granted.join("\n") : "Nenhuma",
          inline: true,
        },
        {
          name: "❌ Permissões Negadas",
          value: denied.length ? denied.join("\n") : "Nenhuma",
          inline: true,
        }
      )
      .setFooter({ text: `Canal: ${channel.name}` });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
