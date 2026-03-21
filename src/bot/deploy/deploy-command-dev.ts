import { REST, Routes } from 'discord.js';
import {getAllCommands} from '../discord';
import 'dotenv/config';

const commands: object[] = [];

for (const command of getAllCommands()) {
  commands.push(command.data.toJSON());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

(async () => {
  try {
    console.log(`Atualizando ${commands.length} comandos...`);

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENTE_ID!, process.env.GUILD_ID!),
      { body: commands }
    );

    console.log('Comandos registrados com sucesso!');
  } catch (error) {
    console.error(error);
  }
})();