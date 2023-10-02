import { Database } from "bun:sqlite";
import { existsSync, mkdirSync } from "fs";

const fileDb = 'db/kamus.sqlite'
const exists = existsSync(fileDb)

// mkdir
if (!exists) {
  mkdirSync(fileDb)
}

const db = new Database(fileDb, { create: true });

if (!exists) {
  db.run("CREATE TABLE kata (id INTEGER PRIMARY KEY AUTOINCREMENT, nama TEXT, arti TEXT, pengucapan TEXT, jenis TEXT, contoh TEXT)")
  db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)")
}

export default db