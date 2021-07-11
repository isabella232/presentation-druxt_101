<img class="h-15 absolute left-90" src="https://nuxtjs.org/logos/nuxt.svg">

# Getting Started

## Nuxt

1. Download Nuxt
```sh
npx create-nuxt-app [DESTINATION]
```

2. Download DruxtSite module
```sh
npm i druxt-site
```

3. Configure `nuxt.config.js`
```js
modules: [
  ...
  'druxt-site',
],

druxt: {
  baseUrl: 'https://example.com',
}
```

4. `npm run dev`

<!--
@TODO - Druxt is a Functional Framework, not a Design library.

## Timing

- 1:00 - Nuxt downloaded
- 1:19 - DruxtSite downloaded
- 1:51 - Setup
-->
