const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const sqlCommandsEmbed = new EmbedBuilder()
  .setColor("Purple")
  .setTitle("📚 Comandos SQL Básicos")
  .addFields(
    {
      name: "🗃️ Tabelas",
      value: `
**CREATE TABLE** — Cria uma nova tabela.
**DROP TABLE** — Apaga uma tabela e seus dados.
**ALTER TABLE** — Altera a estrutura de uma tabela.
**TRUNCATE TABLE** — Limpa todos os dados da tabela.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "📝 Manipulação de Dados",
      value: `
**INSERT INTO** — Insere novos dados.
**UPDATE** — Atualiza dados existentes.
**DELETE** — Remove dados de uma tabela.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "🔍 Consultas e Filtros",
      value: `
**SELECT** — Busca dados no banco.
**WHERE** — Filtra dados conforme condições.
**ORDER BY** — Ordena os resultados.
**GROUP BY** — Agrupa resultados.
**HAVING** — Filtra grupos.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "🔗 Combinações e Unificações",
      value: `
**JOIN** — Junta dados de tabelas.
**UNION** — Une resultados e remove duplicatas.
**UNION ALL** — Une resultados mantendo duplicatas.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "🎭 Condições Especiais",
      value: `
**DISTINCT** — Remove duplicatas.
**AS** — Cria apelidos.
**IN** — Verifica existência em lista.
**BETWEEN** — Filtra intervalo.
**LIKE** — Busca padrões.
**IS NULL / IS NOT NULL** — Verifica nulos.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "📊 Funções de Agregação",
      value: `
**COUNT()** — Conta registros.
**SUM()** — Soma valores.
**AVG()** — Calcula média.
**MIN() / MAX()** — Menor ou maior valor.
`,
    },
    { name: "\u200B", value: "\u200B" },

    {
      name: "🧠 Extras",
      value: `
**CASE** — Condicional tipo if/else.
**EXISTS** — Verifica se subconsulta retorna algo.
`,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sql")
    .setDescription("Relembrar comandos básicos de SQL"),

  async execute(interaction) {
    await interaction.reply({ embeds: [sqlCommandsEmbed] });
  },
};
