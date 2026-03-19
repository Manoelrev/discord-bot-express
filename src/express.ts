import express from 'express';
const server = express()

server.use(express.json());

// Rota de status
server.get('/', (req, res) => {
  res.json({ status: 'online' });
});


export default server;