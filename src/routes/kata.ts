import type Elysia from "elysia";
import {
  createOneKataController, deleteOneKataController,
  getOneKataController, updateOneKataController
} from "../controllers/kata";
import { KataBodyModel, KataParamsModel, KataQueryModel } from "../models/kata";

export default (app: Elysia) =>
  app
    .get('/kata', ({ query }) => getOneKataController(query.nama), {
      query: KataQueryModel
    })
    .post('/kata', ({ body }) => createOneKataController(body), {
      body: KataBodyModel
    })
    .put('/kata/:id', ({ params, body }) => updateOneKataController(params.id, body), {
      params: KataParamsModel,
      body: KataBodyModel
    })
    .delete('/kata/:id', ({ params }) => deleteOneKataController(params.id), {
      params: KataParamsModel
    })
