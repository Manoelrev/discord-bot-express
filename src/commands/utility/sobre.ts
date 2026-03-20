import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from 'discord.js';
const { name, version, author, description } = require('../../../package.json');
import { Command } from '../../types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('sobre')
    .setDescription('mostra informações do projeto'),
    

  async execute(interaction: CommandInteraction): Promise<void> {
    const sobreEmbed = new EmbedBuilder()
        .setColor('#2b2d31')
        .setTitle('🤖 Informações do Bot')
        .addFields(
            { name: '📛 Nome',          value: name,                      inline: true },
            { name: '🔖 Versão',        value: `v${version}`,             inline: true },
            { name: '👤 Autor',         value: author,                    inline: true },
            { name: '📝 Descrição',     value: description,               inline: true },
            { name: '🟢 Node.js',       value: process.version,           inline: true },
            { name: '💾 Plataforma',    value: process.platform,          inline: true },
            { name: '🏗️ Arquitetura',   value: process.arch,              inline: true },
        )
        .setTimestamp()
        .setFooter({ text: `${name} v${version}` });
      
    await interaction.reply({ embeds: [sobreEmbed] });
  },
};

export default command;