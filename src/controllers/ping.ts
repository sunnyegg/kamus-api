const getPingController = () => {
  try {
    return new Response(JSON.stringify({
      status: 200,
      message: 'success',
      data: 'pong'
    }))
  } catch (error) {
    throw error
  }
}

export default {
  getPingController
}