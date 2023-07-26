export default defineEventHandler((event) => {
  return proxyRequest(event, 'https://github.com/404')
})
