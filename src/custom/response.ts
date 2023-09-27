import { IUserCookieModel } from "../models/user"

export const CustomResponse = (status: number, message: string, content?: any, cookie?: IUserCookieModel): Response => {
  const body = JSON.stringify({
    status: status,
    message: message,
    content: content,
  })
  const headers: any = {
    "Content-Type": "application/json"
  }

  if (cookie) {
    headers["Set-Cookie"] = `${cookie.name}=${cookie.value}; HttpOnly; Max-Age=${7 * 86400}`
  }

  return new Response(
    body,
    {
      status: status,
      headers
    }
  )
}
