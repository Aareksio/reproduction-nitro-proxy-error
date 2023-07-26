export default defineNitroConfig({
  routeRules: {
    '/': { 
      proxy: { 
        to: 'https://github.com/404' 
      } 
    },
    '/transparent': { 
      proxy: { 
        to: 'https://github.com/404',
        fetchOptions: {
          ignoreResponseError: true
        } as any
      } 
    },
  },
});
