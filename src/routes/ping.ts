import type Elysia from "elysia";
import pingController from "../controllers/ping";

export default (app: Elysia) =>
  app.get('/ping', pingController.getPingController)
