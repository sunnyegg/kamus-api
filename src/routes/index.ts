import type Elysia from "elysia";
import routesKata from "./kata";
import { CustomError } from "../custom/error";

export default (app: Elysia) => app
  .addError({
    CustomError
  })
  .onError(ctx => {
    switch (ctx.code) {
      case "UNKNOWN":
        return new Response(JSON.stringify({
          status: 500,
          message: ctx.error.message
        }), { status: 500 })

      default:
        return new Response(JSON.stringify({
          status: ctx.error.status,
          message: ctx.error.message
        }), { status: ctx.error.status })
    }
  })
  .use(routesKata)

