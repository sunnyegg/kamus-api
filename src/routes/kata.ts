import type Elysia from "elysia";
import { getKataController } from "../controllers/kata";

export default (app: Elysia) =>
  app.get('/kata', getKataController)
