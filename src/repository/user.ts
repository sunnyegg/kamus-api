import db from "../configs/db"
import { IUserLoginModel, IUserModel } from "../models/user"

export const getOneUser = (username: string): IUserModel | 'UNAUTHORIZED' => {
  let query = "SELECT username, password FROM user WHERE username = ?"

  const stmt = db.prepare(query)
  const res: any = stmt.get(username)
  if (res === null) {
    return "UNAUTHORIZED"
  }

  const data: IUserModel = {
    id: res.id,
    username: res.username,
    password: res.password
  }

  return data
}

export const createOneUser = (body: IUserLoginModel): 'OK' => {
  let query = "INSERT INTO user (username, password) VALUES (?, ?)"

  const stmt = db.prepare(query)
  stmt.run(body.username, body.password)

  return "OK"
}