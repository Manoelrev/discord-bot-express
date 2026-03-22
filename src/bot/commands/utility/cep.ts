import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from 'discord.js';
import {Cep} from '../../../shared/types/cep'
import { Command } from '../../../shared/types/command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('cep')
    .setDescription('consulta CEP')
    .addStringOption(option =>  option.setName("cep").setDescription("Numero de cep").setRequired(true)),

  async execute(interaction: CommandInteraction): Promise<void> {
    if (!interaction.isChatInputCommand()) return;
    
    await interaction.deferReply();
    const cepNumber = interaction.options.getString('cepnumber');

    try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cepNumber}`);

    if (!response.ok) {
      await interaction.editReply(`❌ Não consegui encontrar o CEP informado. Verifique e tente novamente.`);
      return;
    }

    const data = await response.json() as Cep;

    const embed = new EmbedBuilder()
      .setTitle("📍 Resultado da busca de CEP")
      .addFields(
        { name: "CEP", value: data.cep, inline: true },
        { name: "Cidade", value: data.city, inline: true },
        { name: "Estado", value: data.state, inline: true }
      )
      .setColor(0x00AE86)
      .setFooter({ text: "Dados fornecidos pela BrasilAPI" });
        
      await interaction.editReply( {embeds: [embed]} );

    } 
    catch (error) {
      await interaction.editReply('❌ Algo deu errado.');
    }
  }, 
};

export default command;