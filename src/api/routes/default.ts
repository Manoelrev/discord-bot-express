import express  from "express";
const defaultRouter = express.Router()

defaultRouter.get('/', (req, res) => {
    res.status(200).json({
    status: 'Success',
    message: 'API Online',
    timestamp: new Date().toISOString()
  });
});
export default defaultRouter;