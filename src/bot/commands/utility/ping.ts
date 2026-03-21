import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { Command } from '../../../shared/types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com Pong!'),

  async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply('Pong!');
  },
};

export default command;