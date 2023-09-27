import { Elysia } from "elysia";
import routes from './routes';
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(routes)
  .use(cors({
    methods: 'GET' // only GET allowed
  }))
  .listen(process.env.PORT ?? 1337)

console.log(
  `📖 Kamus API is running at ${app.server?.hostname}:${app.server?.port}`
);
