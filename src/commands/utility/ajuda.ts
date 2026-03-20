import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from 'discord.js';
import { Command } from '../../types/command';
import fs from 'node:fs';
import path from 'node:path';

const foldersPath = path.join(__dirname,  '..');
const commandFolders = fs.readdirSync(foldersPath);

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ajuda')
    .setDescription('lista os comandos disponívei'),

  async execute(interaction: CommandInteraction): Promise<void> {
    
    const ajudaEmbed = new EmbedBuilder()
        .setColor('#2b2d31')
        .setTitle('📚 Central de Comandos')
        .setDescription('Use os comandos abaixo para interagir com o bot:\n\u200B')
        .setFooter({ text: 'Sistema de Comandos 🚀' })
        .setTimestamp();

    for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs
            .readdirSync(commandsPath)
            .filter((file) => file.endsWith('.ts'));

        for (const file of commandFiles) {
            
            const filePath = path.join(commandsPath, file);
            const command: Command = require(filePath).default;

            if ('data' in command && 'execute' in command) {
                ajudaEmbed.addFields(
                { name: `⚙️ /${command.data.name}`, value: `${command.data.description}`, inline: false }
            )} 
  }
}

    await interaction.reply({ embeds: [ajudaEmbed] });
  },
};

export default command;