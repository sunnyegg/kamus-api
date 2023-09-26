import { t } from "elysia";

export interface IKataModel {
  id: number
  nama: string
  arti: string
}

export const KataModel = t.Object({
  nama: t.String(),
  arti: t.String()
})
