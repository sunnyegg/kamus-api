import { Database } from "bun:sqlite";
import { existsSync } from "fs";

const fileDb = 'db/kamus.sqlite'
const exists = existsSync(fileDb)

const db = new Database(fileDb, { create: true });

if (!exists) {
  db.run("CREATE TABLE kata (id INTEGER PRIMARY KEY AUTOINCREMENT, nama TEXT, arti TEXT)")
}

export default db