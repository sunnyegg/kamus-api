import type Elysia from "elysia";
import routesKata from "./kata";
import routesUser from "./user";
import { CustomError } from "../custom/error";
import { html } from "@elysiajs/html";

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
  .get("/", () => "📖 Kamus API")
  .use(html())
  .get("/login", ({ html }) => html(`
    <html lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <form action="/api/login" method="post">
          <div class="container">
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <button type="submit">Login</button>
          </div>
        </form>
    </html>
  `))
  .group("/api", (app) =>
    app
      .use(routesUser)
      .use(routesKata)
  )

