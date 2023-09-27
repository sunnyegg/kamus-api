import type Elysia from "elysia";
import {
  createOneKataController, deleteOneKataController,
  getOneKataController, updateOneKataController
} from "../controllers/kata";
import { KataBodyModel, KataParamsModel, KataQueryModel } from "../models/kata";
import jwt from "@elysiajs/jwt";
import cookie from "@elysiajs/cookie";
import { CustomResponse } from "../custom/response";

export default (app: Elysia) =>
  app
    .get('/kata', ({ query }) => getOneKataController(query.nama), {
      query: KataQueryModel
    })
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET ?? 'Rahasia Ilahi',
        exp: '7d'
      })
    )
    .use(cookie())
    .onBeforeHandle((ctx) => {
      if (!ctx.cookie['kamus-auth']) {
        return CustomResponse(401, 'UNAUTHORIZED')
      }
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
