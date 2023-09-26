import type Elysia from "elysia";
import { createOneKataController, getKataController } from "../controllers/kata";
import { KataModel } from "../models/kata";

export default (app: Elysia) =>
  app
    .get('/kata', ({ query }) => getKataController(query?.nama))
    .post('/kata', ({ body }) => createOneKataController(body), {
      body: KataModel
    })
