import { createOneUser, getOneUser } from "../repository/user"
import { IUserCookieModel, IUserLoginModel } from "../models/user";
import { CustomError } from "../custom/error";
import { CustomResponse } from "../custom/response";

export const loginController = async (body: IUserLoginModel, jwt: any): Promise<Response> => {
  const user = getOneUser(body.username)
  if (user === 'UNAUTHORIZED') {
    throw new CustomError(401, user)
  }

  // verify password
  const isMatch = await Bun.password.verify(body.password, user.password, 'bcrypt')
  if (!isMatch) {
    throw new CustomError(401, 'UNAUTHORIZED')
  }

  const cookie: IUserCookieModel = {
    name: "kamus-auth",
    value: await jwt.sign(user.username)
  }

  return CustomResponse(200, "OK", undefined, cookie)
}

export const registerController = async (body: IUserLoginModel): Promise<Response> => {
  // hash password
  const hashedPassword = await Bun.password.hash(body.password, 'bcrypt')
  body.password = hashedPassword

  createOneUser(body)

  return CustomResponse(200, "OK", "CREATED")
}
