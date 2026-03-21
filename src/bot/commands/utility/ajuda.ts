import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from 'discord.js';
import { name, version } from '../../../../package.json';
import { Command } from '../../../shared/types/command';
import {getAllCommands} from '../../discord';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ajuda')
    .setDescription('lista os comandos disponívei'),

  async execute(interaction: CommandInteraction): Promise<void> {
    
    const ajudaEmbed = new EmbedBuilder()
        .setColor('#2b2d31')
        .setTitle('📚 Central de Comandos')
        .setDescription('Use os comandos abaixo para interagir com o bot:\n\u200B')
        .setFooter({ text: `${name} v${version}` })
        .setTimestamp();

    for (const command of getAllCommands()) {
        ajudaEmbed.addFields(
            { name: `⚙️ /${command.data.name}`, value: `${command.data.description}`, inline: false }
    )}

    await interaction.reply({ embeds: [ajudaEmbed] });
  },
};

export default command;