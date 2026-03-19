import 'dotenv/config';
import client from './src/discord';
import server from './src/express';

const DISCORD_TOKEN = process.env.DISCORD_TOKEN
const PORT = process.env.PORT || 3000;

// Inicia o servidor Express
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Loga o bot no Discord
client.login(DISCORD_TOKEN);