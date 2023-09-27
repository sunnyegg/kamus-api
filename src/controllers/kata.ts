import { createOneKata, deleteOneKata, getOneKata, updateOneKata } from "../repository/kata"
import { IRequestKataModel } from "../models/kata";
import { CustomError } from "../custom/error";
import { CustomResponse } from "../custom/response";

export const getOneKataController = (nama: string): Response => {
  const kata = getOneKata(nama)
  if (kata === 'NOT_FOUND') {
    throw new CustomError(404, `kata: '${nama}' notFound`)
  }

  return CustomResponse(200, "OK", kata)
}

export const createOneKataController = (body: IRequestKataModel): Response => {
  const res = createOneKata(body)
  if (res === 'DUPLICATE') {
    throw new CustomError(400, `kata: '${body.nama}' duplicate`)
  }

  return CustomResponse(201, "OK")
}

export const updateOneKataController = (id: string, body: IRequestKataModel): Response => {
  const res = updateOneKata(id, body)
  if (res === 'NOT_FOUND') {
    throw new CustomError(404, `kata with id: '${id}' notFound`)
  }

  if (res === 'DUPLICATE') {
    throw new CustomError(400, `kata: '${body.nama}' duplicate`)
  }

  return CustomResponse(201, "OK")
}

export const deleteOneKataController = (id: string): Response => {
  const res = deleteOneKata(id)
  if (res === 'NOT_FOUND') {
    throw new CustomError(404, `kata with id: '${id}' notFound`)
  }

  return CustomResponse(200, "OK")
}