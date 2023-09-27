import db from "../configs/db"
import { IKataModel, IRequestKataModel } from "../models/kata"

export const getOneKata = (nama: string): IKataModel | "NOT_FOUND" => {
  let query = "SELECT id, nama, arti FROM kata WHERE nama = ?"

  const stmt = db.prepare(query)
  const res: any = stmt.get(nama)
  if (res === null) {
    return "NOT_FOUND"
  }

  const data: IKataModel = {
    id: res.id,
    nama: res.nama,
    arti: res.arti
  }

  return data
}

export const createOneKata = (data: IRequestKataModel): "OK" | "DUPLICATE" => {
  const checkKata = getOneKata(data.nama)
  if (checkKata !== 'NOT_FOUND') {
    return "DUPLICATE"
  }

  let query = "INSERT INTO kata (nama, arti) VALUES (?, ?)";
  const stmt = db.prepare(query)
  stmt.run(data.nama, data.arti)

  return "OK"
}

export const updateOneKata = (id: string, data: IRequestKataModel): "OK" | "NOT_FOUND" | "DUPLICATE" => {
  const checkKata = getOneKataById(id)
  if (checkKata === 'NOT_FOUND') {
    return "NOT_FOUND"
  }

  const checkDuplicate = getOneKata(data.nama)
  if (checkDuplicate !== 'NOT_FOUND') {
    return "DUPLICATE"
  }

  let query = "UPDATE kata SET nama = ?, arti = ? WHERE id = ?";
  const stmt = db.prepare(query)
  stmt.run(data.nama, data.arti, id)

  return "OK"
}

export const deleteOneKata = (id: string): "OK" | "NOT_FOUND" => {
  const checkKata = getOneKataById(id)
  if (checkKata === 'NOT_FOUND') {
    return "NOT_FOUND"
  }

  let query = "DELETE FROM kata WHERE id = ?";
  const stmt = db.prepare(query)
  stmt.run(id)

  return "OK"
}

const getOneKataById = (id: string): IKataModel | "NOT_FOUND" => {
  let query = "SELECT id, nama, arti FROM kata WHERE id = ?"

  const stmt = db.prepare(query)
  const res: any = stmt.get(id)
  if (res === null) {
    return "NOT_FOUND"
  }

  const data: IKataModel = {
    id: res.id,
    nama: res.nama,
    arti: res.arti
  }

  return data
}