import db from "../configs/db"
import { IKataModel } from "../models/kata"

export const getOneKata = (nama: string): IKataModel | string => {
  let query = "SELECT id, nama, arti FROM kata "
  if (nama !== undefined) {
    query += "WHERE nama = ?"
  }

  const stmt = db.prepare(query)
  const res: any = stmt.get(nama)
  if (res === null) {
    return 'NOT_FOUND'
  }

  const data: IKataModel = {
    id: res.id,
    nama: res.nama,
    arti: res.arti
  }

  return data
}

export const createOneKata = (data: IKataModel): string => {
  const checkKata = getOneKata(data.nama)
  if (checkKata !== "NOT_FOUND") {
    return "DUPLICATE"
  }
  let query = "INSERT INTO kata (nama, arti) VALUES (?, ?)";
  const stmt = db.prepare(query)
  stmt.run(data.nama, data.arti)
  return "OK"
}