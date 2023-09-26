import { createOneKata, getOneKata } from "../repository/kata"
import { KataModel } from "../models/kata";
import { NotFoundError } from "elysia";

export const getKataController = (nama: any): typeof KataModel => {
  const kata = getOneKata(nama)
  if (typeof kata === 'string') {
    throw new NotFoundError
  }
  const data: any = {
    nama: kata.nama,
    arti: kata.arti
  }

  return data
}

export const createOneKataController = (body: any): typeof KataModel => {
  const res = createOneKata(body)
  if (res === "DUPLICATE") {
    throw new Error(res)
  }
  return body
}