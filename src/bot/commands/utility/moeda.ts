import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from 'discord.js';
import { Command } from '../../../shared/types/command';
import { Moeda } from '../../../shared/types/Moeda';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('moeda')
    .setDescription('retorna a moeda na cotação atual do real')
    .addStringOption(option =>  option.setName("moeda").setDescription("Siglas da moeda desejada").setRequired(true)),

  async execute(interaction: CommandInteraction): Promise<void> {
    if (!interaction.isChatInputCommand()) return;
    
    await interaction.deferReply();
    const coin = interaction.options.getString('moeda');
    const link = `https://economia.awesomeapi.com.br/json/daily/${coin?.toUpperCase()}-BRL/`;
    try {
    const response = await fetch(link);
    
    if (!response.ok) {
      await interaction.editReply(`❌ Sigla não encontrada.`);
      return;
    }

    const data = await response.json() as Moeda[];
    const coinnumber: number = Number(data[0].high)
    const embed = new EmbedBuilder()
      .setTitle("📍 Cotação de moedas")
      .addFields(
        { name: "Cotação", value: data[0].name, inline: true },
        { name: data[0].code, value: `$ ${coinnumber.toFixed(2)}`, inline: true },
        { name: data[0].codein, value: '$ 1.00', inline: true }
      )
      .setColor(0x00AE86)
      .setFooter({ text: "Dados fornecidos pela awesomeapi" });
        
      await interaction.editReply( {embeds: [embed]} );

    } 
    catch (error) {
      await interaction.editReply('❌ Algo deu errado.');
    }
  }, 
};

export default command;