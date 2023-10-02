import { t } from "elysia";

export interface IKataModel {
  id?: number
  nama: string
  arti: string
  pengucapan: string
  jenis: string
  contoh: string
}

export interface IRequestKataModel {
  nama: string
  arti: string[]
  pengucapan: string
  jenis: string
  contoh: string
}

export const KataBodyModel = t.Object({
  nama: t.String(),
  arti: t.Array(t.String()),
  pengucapan: t.String(),
  jenis: t.String(),
  contoh: t.String(),
})

export const KataQueryModel = t.Object({
  nama: t.String()
})

export const KataParamsModel = t.Object({
  id: t.String()
})
