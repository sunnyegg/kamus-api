import { NotFoundError } from "elysia"
import db from "../configs/db"

interface Kata {
  id: number
  nama: string
  arti: string
}

export const getOneKata = (nama: string): Kata => {
  let query = "SELECT id, nama, arti FROM kata "
  if (nama !== undefined) {
    query += "WHERE nama = ?"
  }

  const stmt = db.prepare(query)
  const res: any = stmt.get(nama)
  if (res === null) {
    throw new NotFoundError()
  }

  const data: Kata = {
    id: res.id,
    nama: res.nama,
    arti: res.arti
  }

  return data
}