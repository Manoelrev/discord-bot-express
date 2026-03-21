import express from 'express';
import healthRouter from './routes/health';
import logRouter from './routes/log';
import defaultRouter from './routes/default';

const server = express()
server.use(express.json());

// Rotas
server.use('/', defaultRouter)
server.use('/health', healthRouter)
server.use('/log', logRouter)

export default server;