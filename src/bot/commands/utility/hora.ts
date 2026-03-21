import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { Command } from '../../../shared/types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('hora')
    .setDescription('retorna a data e hora atual'),

  async execute(interaction: CommandInteraction): Promise<void> {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); 

    await interaction.reply(`Hoje é dia ${formattedDate}`);
  },
};

export default command;