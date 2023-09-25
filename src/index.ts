import { Elysia } from "elysia";
import routes from './routes';

const app = new Elysia().use(routes).listen(process.env.PORT ?? 1337)

console.log(
  `📖 Kamus API is running at ${app.server?.hostname}:${app.server?.port}`
);
