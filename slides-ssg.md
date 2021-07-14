
# Static Site Generation

1. Configure `nuxt.config.js`
```js
target: 'static',
ssr: true,

// optional.
generate: {
  routes: ['/', '/en', '/es'],
}
```

2. `npm run generate`

3. (optional) `npm start`

<!--
Static Site generation works out of the box, as long as you have `target: 'static'` set.

Nuxt will crawl all accessible links and generate HTML pages for Drupals content.

If
-->
