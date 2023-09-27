import { t } from "elysia";

export interface IKataModel {
  id: number
  nama: string
  arti: string
}

export interface IRequestKataModel {
  nama: string
  arti: string
}

export const KataBodyModel = t.Object({
  nama: t.String(),
  arti: t.String()
})

export const KataQueryModel = t.Object({
  nama: t.String()
})

export const KataParamsModel = t.Object({
  id: t.String()
})
