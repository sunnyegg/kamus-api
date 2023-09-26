import type Elysia from "elysia";
import routesKata from "./kata";

export default (app: Elysia) => app
  .onError(ctx => {
    switch (ctx.code) {
      case "UNKNOWN":
        ctx.set.status = 400
        return ctx.error.message

      case "VALIDATION":
        ctx.set.status = 400
        return ctx.error.message

      case "NOT_FOUND":
        ctx.set.status = 404
        return ctx.error.message

      case "PARSE":
        ctx.set.status = 400
        return ctx.error.message

      case "INTERNAL_SERVER_ERROR":
        ctx.set.status = 500
        return ctx.code
    }
  })
  .use(routesKata)

