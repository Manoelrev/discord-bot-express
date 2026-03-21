import fs from 'node:fs';
import path from 'node:path';
import { Client,Collection, Events, GatewayIntentBits, Interaction } from 'discord.js';
import {dataError, dataCommand, jsonArray} from '../shared/types/commandData'
import { Command } from '../shared/types/command';
import { writeData } from '../shared/persistance';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection<string, Command>();

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
  }
}

export function getAllCommands(): Command[] {
  const result: Command[] = [];

  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith('.ts'));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command: Command = require(filePath).default;

      if ('data' in command && 'execute' in command) {
        result.push(command)
      } else {
        console.log(`[WARNING] Comando em ${filePath} está faltando "data" ou "execute".`);
      }
    }
  }

  return result;
}

for (const command of getAllCommands()) {
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Bot iniciado ! logado como ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);

  if (!command) {
    const data: dataError = {
      msg: `Comando "${interaction.commandName}" não encontrado.`,
      createAt: new Date()
    } 

    jsonArray.push(JSON.stringify(data))
    
    return;
  }
  try {
    await command.execute(interaction);

    const data: dataCommand = {
      id: interaction.id,
      guild: interaction.guild?.name,
      user: interaction.user.username,
      command: interaction.commandName,
      createAt: interaction.createdAt
    };

    writeData(JSON.stringify(data))


  } 
  catch (error) {

    const data: dataError = {
      msg: `Erro ao executar "${interaction.commandName}"`,
      createAt: new Date()
    } 

    writeData(JSON.stringify(data))
    
    const msg = {
      content: '⚠️ Ocorreu um erro ao executar este comando. Tente novamente mais tarde.',
      ephemeral: true
    };

    if (interaction.replied || interaction.deferred) {await interaction.followUp(msg);} 
    else { await interaction.reply(msg);}

  }
});



export default client;