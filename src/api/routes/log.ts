import express  from "express";
import { jsonArray } from "../../shared/types/commandData";
const logRouter = express.Router()

logRouter.get('/', (req, res) => {

  return res.json(jsonArray);
});

export default logRouter;