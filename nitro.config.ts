export default defineNitroConfig({
  routeRules: {
    '/': { proxy: { to: 'https://github.com/404' } },
  },
});
