import express  from "express";
import client from '../../bot/discord';
const healthRouter = express.Router()

healthRouter.get('/', (req, res) => {

  const discordBotStatus = client.isReady() ? 'connectado' : 'disconectado';

  const healthCheck = {
    status: discordBotStatus === 'connectado' ? 'UP' : 'DOWN',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    discord: discordBotStatus,
  };

  if (healthCheck.status === 'DOWN') {
    return res.status(503).json(healthCheck);
  }

  res.status(200).json(healthCheck);
});

export default healthRouter;