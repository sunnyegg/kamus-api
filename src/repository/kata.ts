import db from "../configs/db"
import { IKataModel } from "../models/kata"

export const getOneKata = (nama: string): IKataModel | "NOT_FOUND" => {
  let query = "SELECT * FROM kata WHERE nama = ?"

  const stmt = db.prepare(query)
  const res: any = stmt.get(nama)
  if (res === null) {
    return "NOT_FOUND"
  }

  const data: IKataModel = {
    id: res.id,
    nama: res.nama,
    arti: res.arti,
    pengucapan: res.pengucapan,
    jenis: res.jenis,
    contoh: res.contoh,
  }

  return data
}

export const createOneKata = (data: IKataModel): "OK" | "DUPLICATE" => {
  const checkKata = getOneKata(data.nama)
  if (checkKata !== 'NOT_FOUND') {
    return "DUPLICATE"
  }

  let query = "INSERT INTO kata (nama, arti, pengucapan, jenis, contoh) VALUES (?, ?, ?, ?, ?)";
  const stmt = db.prepare(query)
  stmt.run(data.nama, data.arti, data.pengucapan, data.jenis, data.contoh)

  return "OK"
}

export const updateOneKata = (id: string, data: IKataModel): "OK" | "NOT_FOUND" | "DUPLICATE" => {
  const checkKata = getOneKataById(id)
  if (checkKata === 'NOT_FOUND') {
    return "NOT_FOUND"
  }

  const checkDuplicate = getOneKata(data.nama)
  if (checkDuplicate !== 'NOT_FOUND') {
    return "DUPLICATE"
  }

  let query = "UPDATE kata SET nama = ?, arti = ?, pengucapan = ?, jenis = ?, contoh = ? WHERE id = ?";
  const stmt = db.prepare(query)
  stmt.run(data.nama, data.arti, data.pengucapan, data.jenis, data.contoh, id)

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
    arti: res.arti,
    pengucapan: res.pengucapan,
    jenis: res.jenis,
    contoh: res.contoh,
  }

  return data
}