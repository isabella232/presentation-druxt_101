---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
info: |
  ## Druxt 101
  Fully Decoupled Drupal with JSON:API and Nuxt.js

  Learn more at [DruxtJS.org](https://druxtjs.org)
src: ./slides/index.md
theme: ./theme
---

---
layout: image-right
image: https://s.gravatar.com/avatar/499831a65f45885a7e1b70ea47c06a58?s=800
src: ./slides/presenter/stuart-clark.md
---

---
layout: image-left
image: https://secure.gravatar.com/avatar/dd0e29f8a76a2481b2bfec40e69f749f?s=800
src: ./slides/presenter/brian-gilbert.md
---

---
layout: center
src: ./slides/druxt/index.md
---

---
layout: center
src: ./slides/druxt/drupal.md
---

---
layout: center
src: ./slides/druxt/drupal-module.md
---

---
layout: center
src: ./slides/druxt/nuxt.md
---

---
layout: center
src: ./slides/druxt/nuxt-modules.md
---

---
class: text-center
layout: cover
src: ./slides/druxt/tldr.md
---

---
layout: center
src: ./slides/toc.md
---

---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
layout: cover
src: ./slides/umami/index.md
---

---
layout: center
src: ./slides/modules/druxt-site.md
---

---
class: text-sm
id: R6eM3JQ_pv8
layout: youtube-right
src: ./slides/umami/demo.md
---

---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
layout: cover
src: ./slides/getting-started/index.md
---

---
layout: youtube-left
id: PQcTyIpdHsk
src: ./slides/getting-started/drupal.md
---

---
layout: youtube-right
id: aWoQRb4F3FY
src: ./slides/getting-started/nuxt.md
---

---
background: /images/nuxt-welcome.png
class: text-center
layout: cover
src: ./slides/getting-started/demo-1.md
---

---
layout: image-right-position
position: top left
image: /images/druxt-welcome.png
src: ./slides/modules/druxt-router.md
---

---
src: ./slides/diagrams/druxt-router.md
---

---
layout: center
src: ./slides/modules/druxt-views.md
---

---
background: /images/drupal-cms.png
class: text-center
layout: cover
src: ./slides/getting-started/demo-2.md
---

---
layout: center
src: ./slides/modules/druxt-entity.md
---

---
image: /images/components.png
layout: image-right-position
position: left
src: ./slides/modules/druxt-schema.md
---

---
background: /images/components.png
class: text-center
layout: cover
---

# Theming

## DruxtWrapper

---

# Theming

### Slots & Wrappers

```vue {all|1-7|9-15|17-21}
<template>
  <BCard>
    <h2>{{ entity.attributes.title }}</h2>
    <slot name="body" />
    <BButton :to="link" variant="success">Read more</BButton>
  </BCard>
</template>

<script>
export default {
  computed: {
    link: ({ entity }) => entity.attributes.path.alias || `/node/${entity.attributes.drupal_internal__nid}`,
  },
}
</script>

<style scoped>
h2 {
  color: #007bff;
}
</style>
```

<!--
Druxt provides Wrapper components for theming the modules.

A wrapper is just a Vue component:
- Template: `.tpl.php/.twig` HTML + Components, Slots and Mustache templates.
- Script: `.js` Vue & Nuxt data, props, methods, etc
- Style: `.css` Multi-lingual, scope, PostCSS processing

Each module provides slots and $attrs as well as a mixin to register props.

Example: `druxt/entity/node/article/teaser.vue`
-->

---

# Theming

### $attrs, props & mixins

<div class="grid grid-cols-[2fr,2fr] gap-4 mt-4 text-sm">
  <div>

```jsx
<template>
  <div>{{ $attrs.entity.attributes.title }}</div>
</template>
```

All unregistered props data is provided as `$attrs`.

It is recommended to register your `props`, or use the `mixin` provided by the module.

  </div>
  <div>

```jsx
<template>
  <div>{{ entity.attributes.title }}</div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
```

  </div>
</div>

---
image: /images/components.png
layout: image-right-position
position: left
---

# Theming

### Wrapper component options + discovery

![DruxtEntity Component options](/images/devtools-entity-component-options.png)

<!--
- Druxt modules provide options for the Wrapper component.  
- Nuxt (>= v2.13) auto imports components.  
- First available option is used.  
- Most modules provide a default if no Wrapper component found.  
-->

---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
layout: cover
---

# Prettification

## (Round 3)

<!--
1. Inspect DruxtEntity with VueDevTools
2. Show data > component > options.
3. Create `druxt/entity/node/article/Teaser.vue`
4. Navigate to node
5. ...storybook
-->

---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
layout: cover
---

# Blocks & Regions

---
layout: center
---

<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="pb-4 text-center">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>DruxtBlocks</h1>
      <a href="https://blocks.druxtjs.org" target="_blank">blocks.druxtjs.org</a>
    </div>
    <div class="opacity-50 mb-2 text-sm">
      Provides Drupal blocks and region components.
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/druxt-blocks" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/druxt-blocks?label=druxt-blocks" alt="NPM version"></a>
    </div>
  </div>
  <div class="pb-4 pl-8">

```jsx
<DruxtBlock :id="drupal_internal__id" />
```

```jsx
<DruxtBlockRegion 
  :name="name"
  :theme="theme"
/>
```

![Example DruxtBlockRegion component](/images/druxt-block-region.png)

  </div>
</div>

---
background: /images/umami-storybook.png
class: text-center
layout: cover
---

# Storybook

---
layout: youtube-right
id: ek8BlCghwkE
---

<img class="h-15 absolute left-95" src="https://raw.githubusercontent.com/storybookjs/brand/master/icon/icon-storybook-default.svg">

# @nuxtjs/storybook

[storybook.nuxtjs.org](https://storybook.nuxtjs.org/)

<div class="mb-8" />

### + Druxt =

Zero-config, auto-generated Storybook integration with Druxt modules.

<div class="mb-16" />

## Getting started

<div class="mb-4" />

1. Download @nuxtjs/storybook module
```sh
npm i -D @nuxtjs/storybook
```

2. `npx nuxt storybook`

<!--
Druxt provides zero-config, auto-generated Storybook integration.

## Timing

- 0:31 - Installed
- 1:05 - Running

### Blocks

1. Bartik > Secondary Menu >> DruxtBlock (initial)
2. Docs tab
3. Expand "Content" region

### Entity

- 1:30

1. Node > Article > View displays > Default
2. Canvas tab
3. Mode > teaser
4. Change UUID (needs 2xArticles)

### Views

- 1:50

1. Frontpage > Master
2. Open in new tab
3. Vue developer tools
-->

---
background: /images/umami-storybook.png
class: text-center
layout: cover
---

# Story time

## (Round 4)

<!--
1. Open Storybook > Entity > Node > Article > View displays > Docs
2. Brief walkthrough
3. Open Default in new tab
4. Open Vue dev tools
5. Add template
    ```vue
    <template>
    </template>
    ```
-->
