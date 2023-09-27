import { t } from "elysia";

export interface IUserModel {
  id: number
  username: string
  password: string
}

export interface IUserLoginModel {
  username: string
  password: string
}

export interface IUserCookieModel {
  name: string
  value: string
}

export const LoginBodyModel = t.Object({
  username: t.String(),
  password: t.String()
})