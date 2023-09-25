import { getOneKata } from "../models/kata"

export const getKataController = ({ query }: any) => {
  const kata = getOneKata(query.nama)
  return kata
}