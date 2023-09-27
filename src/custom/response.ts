export const CustomResponse = (status: number, message: string, content?: any): Response => {
  const body = JSON.stringify({
    status: status,
    message: message,
    content: content,
  })

  return new Response(
    body,
    {
      status: status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}
