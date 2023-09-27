import type Elysia from "elysia";
import { loginController } from "../controllers/user";
import { LoginBodyModel } from "../models/user";
import jwt from "@elysiajs/jwt";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET ?? 'Rahasia Ilahi',
        exp: '7d'
      })
    )
    .post('/login', async ({ body, jwt }) => await loginController(body, jwt), {
      body: LoginBodyModel
    })

// .post('/register', async ({ body }) => await registerController(body), {
//   body: LoginBodyModel
// })