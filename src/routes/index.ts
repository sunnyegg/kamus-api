import type Elysia from "elysia";
import allPings from "./ping";

export default (app: Elysia) =>
  app.onError((ctx) => {
    console.error(ctx.error)

    switch (ctx.code) {
      case 'NOT_FOUND':
        ctx.set.status = 404
        return new Response(JSON.stringify({
          status: 404,
          message: ctx.error.message,
          data: null
        }))

      default:
        ctx.set.status = 500
        return new Response(JSON.stringify({
          status: 500,
          message: ctx.error.message,
          data: null
        }))
    }
  })
    .use(allPings)

