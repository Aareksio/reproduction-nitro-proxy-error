### Reproduction
1. `pnpm install`
2. `pnpm dev`
3. Visit `/` (eg. http://localhost:3000/)
4. Check terminal

### Error
```
[nitro] [request error] [unhandled]  (404 Not Found (https://github.com/404))
  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)  
  at async sendProxy (./node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs:521:20)  
  at async Object.handler (./node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs:1284:19)  
  at async Server.toNodeHandle (./node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs:1359:7)
```

### Rationale
When proxying API requests (eg. `/api/**`), there is no need for the server to log every 4xx exception as "unhandled". Imagine the following code:
```ts
try {
  const profile = await $fetch(`/api/profile/${params.id}`)
} catch (err) {
  // Handle 404, it is _expected_
  navigateTo('/404')
}
```

### Expected result

Fully proxied response, in this reproduction https://github.com/404

See http://localhost:3000/404 ([source](https://github.com/Aareksio/reproduction-nitro-proxy-error/blob/main/routes/404.ts)) for workaround which does exactly that
